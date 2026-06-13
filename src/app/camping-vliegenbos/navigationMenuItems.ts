import formatPath from '../../utils/formatPath'

export const navigationMenuItems = [
  {
    heading: 'Algemeen',
    items: [
      {
        href: formatPath('/camping-vliegenbos/over-de-camping'),
        label: 'Over de camping',
      },
      {
        href: '#',
        label: 'Zoek en boek',
      },
      {
        href: '#',
        label: 'Route',
      },
    ],
  },
  {
    heading: 'Accommodaties',
    items: [
      {
        href: '#',
        label: 'Tenten',
      },
      {
        href: '#',
        label: 'Campers en caravans',
      },
      {
        href: '#',
        label: 'Trekkershutten',
      },
    ],
  },
]
