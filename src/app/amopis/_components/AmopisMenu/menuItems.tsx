import type { IconProps } from '@amsterdam/design-system-react'
import formatPath from '../../../../utils/formatPath'

import {
  BarChartIcon,
  DocumentsIcon,
  FolderIcon,
  PieChartIcon,
  SettingsIcon,
} from '@amsterdam/design-system-react-icons'

type MenuItem = {
  activePathPrefix?: string
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
    activePathPrefix: formatPath('/amopis/projecten'),
    href: formatPath('/amopis/projecten'),
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
