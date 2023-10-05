export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Anotações',
    href: '/anotacoes',
  },
  {
    label: 'Tiragens',
    href: '/tiragens',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
]
