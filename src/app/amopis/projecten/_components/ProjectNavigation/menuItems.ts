type BaseMenuItem = {
  disabled?: boolean
  label: string
  slug: string
}

type SubMenuItem = BaseMenuItem

export type MenuItem = BaseMenuItem & {
  subMenuItems: Array<SubMenuItem>
}

export const menuItems: Array<MenuItem> = [
  {
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
  { disabled: true, label: 'Financiën', slug: 'financien', subMenuItems: [] },
  { disabled: true, label: 'Projectstructuur', slug: 'projectstructuur', subMenuItems: [] },
  { disabled: true, label: 'Kwaliteit', slug: 'kwaliteit', subMenuItems: [] },
  {
    label: 'Planning',
    slug: 'planning',
    subMenuItems: [
      { disabled: true, label: 'Mijlpalen', slug: 'mijlpalen' },
      { disabled: true, label: 'Planfases', slug: 'planfases' },
      { label: 'Capaciteitsraming', slug: 'capaciteitsraming' },
      { disabled: true, label: 'Maatregelen en acties', slug: 'maatregelen-en-acties' },
    ],
  },
  { disabled: true, label: 'Risico’s', slug: 'risicos', subMenuItems: [] },
  { disabled: true, label: 'Logboek', slug: 'logboek', subMenuItems: [] },
]
