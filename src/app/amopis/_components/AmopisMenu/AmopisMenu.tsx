import type { MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import { HTMLAttributes, PropsWithChildren } from 'react'

import { menuItems } from './menuItems'

type AmopisMenuProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  inWideWindow?: MenuProps['inWideWindow']
}

export function AmopisMenu(props: AmopisMenuProps) {
  return (
    <Menu {...props}>
      {menuItems.map(({ href, icon, text }) => (
        <Menu.Link href={href} icon={icon} key={text}>
          {text}
        </Menu.Link>
      ))}
    </Menu>
  )
}
