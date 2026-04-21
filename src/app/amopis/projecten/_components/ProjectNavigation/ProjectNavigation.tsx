'use client'

import type { AnchorHTMLAttributes, ComponentType } from 'react'

import { Grid, TabNavigation } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { menuItems } from './menuItems'

const LinkComponent: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...restProps }) => (
  <NextLink {...restProps} href={href ?? '#'} />
)

export function ProjectNavigation() {
  const pathname = usePathname()
  const [, , , currentMainSlug, currentSubSlug] = pathname.split('/')
  const currentMenu = menuItems.find(({ slug }) => slug === currentMainSlug) ?? menuItems[0]
  const subMenuItems = currentMenu.subMenuItems

  return (
    <>
      <Grid.Cell appearance="flush" rowSpan={2} span={{ narrow: 4, medium: 2, wide: 2 }}>
        <TabNavigation accessibleName="Projectnavigatie" orientation="vertical">
          <TabNavigation.List>
            {menuItems.map(({ disabled, label, slug, subMenuItems: subItems }) => {
              const firstEnabledSubItem = subItems.find((item) => !item.disabled)
              const href = firstEnabledSubItem
                ? `/amopis/projecten/${slug}/${firstEnabledSubItem.slug}`
                : `/amopis/projecten/${slug}`
              return disabled ? (
                <TabNavigation.Link aria-disabled="true" href="#" key={slug} onClick={(e) => e.preventDefault()}>
                  {label}
                </TabNavigation.Link>
              ) : (
                <TabNavigation.Link
                  aria-current={currentMainSlug === slug ? 'page' : undefined}
                  href={href}
                  key={slug}
                  linkComponent={LinkComponent}
                >
                  {label}
                </TabNavigation.Link>
              )
            })}
          </TabNavigation.List>
        </TabNavigation>
      </Grid.Cell>
      {subMenuItems.length > 0 && (
        <Grid.Cell
          appearance="flush"
          span={{ narrow: 4, medium: 6, wide: 10 }}
          start={{ narrow: 1, medium: 3, wide: 3 }}
        >
          <TabNavigation accessibleName={`Subnavigatie voor ${currentMenu.label}`}>
            <TabNavigation.List>
              {subMenuItems.map(({ disabled, label, slug }) =>
                disabled ? (
                  <TabNavigation.Link aria-disabled="true" href="#" key={slug} onClick={(e) => e.preventDefault()}>
                    {label}
                  </TabNavigation.Link>
                ) : (
                  <TabNavigation.Link
                    aria-current={currentSubSlug === slug ? 'page' : undefined}
                    href={`/amopis/projecten/${currentMenu.slug}/${slug}`}
                    key={slug}
                    linkComponent={LinkComponent}
                  >
                    {label}
                  </TabNavigation.Link>
                ),
              )}
            </TabNavigation.List>
          </TabNavigation>
        </Grid.Cell>
      )}
    </>
  )
}
