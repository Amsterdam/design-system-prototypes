import type { MenuProps } from '@amsterdam/design-system-react'

import { Menu } from '@amsterdam/design-system-react'
import {
  BarChartIcon,
  DocumentsIcon,
  FolderIcon,
  PieChartIcon,
  SettingsIcon,
} from '@amsterdam/design-system-react-icons'
import { HTMLAttributes, PropsWithChildren } from 'react'

const menuItems = [
  {
    href: '#',
    icon: <PieChartIcon />,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: <FolderIcon />,
    text: 'Projecten',
  },
  {
    href: '#',
    icon: <DocumentsIcon />,
    text: 'Rapportages',
  },
  {
    href: '#',
    icon: <BarChartIcon />,
    text: 'Analyses',
  },
  {
    href: '#',
    icon: <SettingsIcon />,
    text: 'Instellingen',
  },
]

type AmopisMenuProps = {
  inWideWindow?: MenuProps['inWideWindow']
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export function AmopisMenu({ inWideWindow, ...restProps }: AmopisMenuProps) {
  return (
    <Menu inWideWindow={inWideWindow} {...restProps}>
      {menuItems.map(({ href, icon, text }) => (
        <Menu.Link href={href} icon={icon} key={text}>
          {text}
        </Menu.Link>
      ))}
    </Menu>
  )
}
