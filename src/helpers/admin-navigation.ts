import { SVGProps } from 'react'
import _ from 'lodash'
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  HeartIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/outline'

export interface INavigation {
  name: string
  href: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export interface IUserNavigation {
  name: string
  href: string
}

export const navigation: INavigation[] = [
  { name: 'Resumo', href: '/admin', icon: HomeIcon, },
  { name: 'Empresas', href: '/admin/empresas', icon: BriefcaseIcon, },
  { name: 'Usuários', href: '/admin/usuarios', icon: UserGroupIcon, },
  { name: 'Assinaturas', href: '/admin/assinaturas', icon: HeartIcon, },
  { name: 'Transações', href: '/admin/transacoes', icon: CurrencyDollarIcon, },
]

export const userNavigation: IUserNavigation[] = [
  { name: 'Seu Perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sair', href: '#' },
]

export default function getNavigation<INavigation>(key: string, value: string) {
  return _.find(navigation, { [key]: value })
}
