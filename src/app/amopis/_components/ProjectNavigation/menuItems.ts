type SubMenuItem = {
  label: string
  slug: string
}

export type MenuItem = {
  label: string
  slug: string
  subMenuItems: Array<SubMenuItem>
}

export const menuItems: Array<MenuItem> = [
  {
    label: 'Projectdetails',
    slug: 'projectdetails',
    subMenuItems: [
      { label: 'Overzicht', slug: 'overzicht' },
      { label: 'Kerngegevens', slug: 'kerngegevens' },
      { label: 'Projectinformatie', slug: 'projectinformatie' },
      { label: 'Projectgrenzen', slug: 'projectgrenzen' },
      { label: 'Projectcodes', slug: 'projectcodes' },
      { label: 'Autorisaties', slug: 'autorisaties' },
    ],
  },
  { label: 'Financiën', slug: 'financien', subMenuItems: [] },
  { label: 'Projectstructuur', slug: 'projectstructuur', subMenuItems: [] },
  { label: 'Kwaliteit', slug: 'kwaliteit', subMenuItems: [] },
  {
    label: 'Planning',
    slug: 'planning',
    subMenuItems: [
      { label: 'Mijlpalen', slug: 'mijlpalen' },
      { label: 'Planfases', slug: 'planfases' },
      { label: 'Capaciteitsraming', slug: 'capaciteitsraming' },
      { label: 'Maatregelen en acties', slug: 'maatregelen-en-acties' },
    ],
  },
  { label: 'Risico’s', slug: 'risicos', subMenuItems: [] },
  { label: 'Logboek', slug: 'logboek', subMenuItems: [] },
]
