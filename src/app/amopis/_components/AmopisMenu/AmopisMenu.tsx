import { Menu, MenuProps } from '@amsterdam/design-system-react'
import {
  BarChartIcon,
  CogwheelIcon,
  DocumentsIcon,
  FolderIcon,
  PieChartIcon,
} from '@amsterdam/design-system-react-icons'

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
    icon: <CogwheelIcon />,
    text: 'Instellingen',
  },
]

type AmopisMenuProps = {
  inWideWindow?: MenuProps['inWideWindow']
}

export function AmopisMenu({ inWideWindow }: AmopisMenuProps) {
  return (
    <Menu inWideWindow={inWideWindow}>
      {menuItems.map(({ href, icon, text }) => (
        <Menu.Link color="inverse" href={href} icon={icon} key={text}>
          {text}
        </Menu.Link>
      ))}
    </Menu>
  )
}
