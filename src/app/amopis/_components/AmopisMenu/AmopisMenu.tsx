'use client'

import type { MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import { HTMLAttributes } from 'react'
import { usePathname } from 'next/navigation'

import { menuItems } from './menuItems'

type AmopisMenuProps = HTMLAttributes<HTMLElement> & {
  inWideWindow?: MenuProps['inWideWindow']
}

export function AmopisMenu(props: AmopisMenuProps) {
  const pathname = usePathname()

  return (
    <Menu {...props}>
      {menuItems.map(({ activePathPrefixes, href, icon, text }) => (
        <Menu.Link
          aria-current={activePathPrefixes?.some((prefix) => pathname.startsWith(prefix)) ? 'page' : undefined}
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
