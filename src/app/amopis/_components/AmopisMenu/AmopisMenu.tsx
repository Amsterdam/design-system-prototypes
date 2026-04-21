'use client'

import type { MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'

import { menuItems } from './menuItems'

type AmopisMenuProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  inWideWindow?: MenuProps['inWideWindow']
}

export function AmopisMenu(props: AmopisMenuProps) {
  const pathname = usePathname()

  return (
    <Menu {...props}>
      {menuItems.map(({ activePathPrefix, href, icon, text }) => (
        <Menu.Link
          aria-current={activePathPrefix && pathname.startsWith(activePathPrefix) ? 'page' : undefined}
          href={href}
          icon={icon}
          key={text}
        >
          {text}
        </Menu.Link>
      ))}
    </Menu>
  )
}
