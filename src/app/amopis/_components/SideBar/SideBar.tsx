import { Menu } from '@amsterdam/design-system-react'
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

export function Sidebar() {
  return (
    <div className="amopis-sidebar">
      <Menu>
        {menuItems.map(({ href, icon, text }) => (
          <Menu.Link color="inverse" href={href} icon={icon} key={text}>
            {text}
          </Menu.Link>
        ))}
      </Menu>
    </div>
  )
}
