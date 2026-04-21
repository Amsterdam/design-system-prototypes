import type { IconProps } from '@amsterdam/design-system-react'

import {
  BarChartIcon,
  DocumentsIcon,
  FolderIcon,
  PieChartIcon,
  SettingsIcon,
} from '@amsterdam/design-system-react-icons'

type MenuItem = {
  activePathPrefixes?: string[]
  href: string
  icon: IconProps['svg']
  text: string
}

export const menuItems: Array<MenuItem> = [
  {
    href: '#',
    icon: <PieChartIcon />,
    text: 'Dashboard',
  },
  {
    activePathPrefixes: ['/amopis/projectdetails', '/amopis/planning', '/amopis/projecten'],
    href: '/amopis/projecten',
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
