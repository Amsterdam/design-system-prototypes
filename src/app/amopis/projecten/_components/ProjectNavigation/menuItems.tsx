import type { IconProps } from '@amsterdam/design-system-react'

import {
  CalendarIcon,
  ClipboardIcon,
  ConnectedCirclesIcon,
  DocumentIcon,
  EuroCoinsIcon,
  LineChartDownIcon,
  LineChartUpIcon,
} from '@amsterdam/design-system-react-icons'

type BaseMenuItem = {
  disabled?: boolean
  label: string
  slug: string
}

type SubMenuItem = BaseMenuItem

export type MenuItem = BaseMenuItem & {
  icon?: IconProps['svg']
  subMenuItems: Array<SubMenuItem>
}

export const menuItems: Array<MenuItem> = [
  {
    icon: DocumentIcon,
    label: 'Projectdetails',
    slug: 'projectdetails',
    subMenuItems: [
      { disabled: true, label: 'Overzicht', slug: 'overzicht' },
      { label: 'Kerngegevens', slug: 'kerngegevens' },
      { disabled: true, label: 'Projectinformatie', slug: 'projectinformatie' },
      { disabled: true, label: 'Projectgrenzen', slug: 'projectgrenzen' },
      { disabled: true, label: 'Projectcodes', slug: 'projectcodes' },
      { disabled: true, label: 'Autorisaties', slug: 'autorisaties' },
    ],
  },
  {
    disabled: true,
    icon: EuroCoinsIcon,
    label: 'Financiën',
    slug: 'financien',
    subMenuItems: [],
  },
  {
    disabled: true,
    icon: ConnectedCirclesIcon,
    label: 'Projectstructuur',
    slug: 'projectstructuur',
    subMenuItems: [],
  },
  {
    disabled: true,
    icon: LineChartUpIcon,
    label: 'Kwaliteit',
    slug: 'kwaliteit',
    subMenuItems: [],
  },
  {
    icon: CalendarIcon,
    label: 'Planning',
    slug: 'planning',
    subMenuItems: [
      {
        disabled: true,
        label: 'Mijlpalen',
        slug: 'mijlpalen',
      },
      {
        disabled: true,
        label: 'Planfases',
        slug: 'planfases',
      },
      {
        label: 'Capaciteitsraming',
        slug: 'capaciteitsraming',
      },
      {
        disabled: true,
        label: 'Maatregelen en acties',
        slug: 'maatregelen-en-acties',
      },
    ],
  },
  {
    disabled: true,
    icon: LineChartDownIcon,
    label: 'Risico’s',
    slug: 'risicos',
    subMenuItems: [],
  },
  {
    disabled: true,
    icon: ClipboardIcon,
    label: 'Logboek',
    slug: 'logboek',
    subMenuItems: [],
  },
]
