import Image from 'next/image'
import AdminTemplate from '@/templates/AdminTemplate'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import Button from '@/components/form/Button'
import StatsGroup, { IStatsGroupItem } from '@/components/StatsGroup'
import { navigation, userNavigation } from '@/helpers/admin-navigation'
import { useStore as useSideover } from '@/store/Sideover'
import UserDetails from '@/screens/UserDetails'
import ExampleForm from '@/screens/ExampleForm'

const stats = [
  { name: 'Total Usuários', stat: '71.897', previousStat: '70.946', change: '1,34%', changeType: 'increase' },
  { name: 'Média de Ativos', stat: '62,33%', previousStat: '59,41%', change: '2,92%', changeType: 'increase' },
  { name: 'Média de Inativos', stat: '37,67%', previousStat: '40,59%', change: '2,92%', changeType: 'decrease' },
] as IStatsGroupItem[]

const people = [
  {
    name: 'Rafael Maia',
    email: 'rafaelmaia@tribunadoparana.com.br',
    plan: 'Plano Colaborador',
    gateway: '-',
    company: 'Tribuna PR',
    role: 'Admin',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a1',
  },
  {
    name: 'Giovanni de Luca',
    email: 'giovanni@nordica.digital',
    plan: 'Plano Colaborador',
    gateway: '-',
    company: 'Tribuna PR',
    role: 'Admin',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a2',
  },
  {
    name: 'Jon Snow',
    email: 'jsnow@winterfel.com',
    plan: 'Plano Basic',
    gateway: 'Pagar.me',
    company: 'Tribuna PR',
    role: 'Assinante',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a3',
  },
  {
    name: 'Oberyn Martell',
    email: 'omartell@sand.com',
    plan: 'Plano Basic',
    gateway: 'Pagar.me',
    company: 'Tribuna PR',
    role: 'Assinante',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a4',
  },
  {
    name: 'Lorde Varys',
    email: 'varys@birds.spy',
    plan: 'Plano Basic',
    gateway: 'Pagar.me',
    company: 'Tribuna PR',
    role: 'Assinante',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a5',
  },
  {
    name: 'Daenerys Targaryen',
    email: 'danyy@dragon.gov',
    plan: 'Plano Basic',
    gateway: 'Pagar.me',
    company: 'Tribuna PR',
    role: 'Assinante',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a6',
  },
  {
    name: 'Ellaria Sand',
    email: 'ellaria@sand.com',
    plan: 'Plano Basic',
    gateway: 'Pagar.me',
    company: 'Tribuna PR',
    role: 'Assinante',
    image: 'https://source.unsplash.com/collection/1073430/440x440?a7',
  },
]

export default function AdminUsersPage() {
  const { create: createSideover } = useSideover(store => store.actions)
  return (
    <AdminTemplate navigation={navigation} userNavigation={userNavigation}>
      <div className="py-6">

        <PageHeading useRoute actions={
          <Button
            label="Adicionar Usuário"
            theme="primary"
            onClick={() => {
              createSideover('Adicionar Usuário', <ExampleForm />, 'lg')
            }}
          />
        } />

        <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          <StatsGroup stats={stats} className="mt-8" />

          <div className="py-8">

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Nome
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Empresa/Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {people.map((person) => (
                          <tr
                            key={person.email}
                            className="hover:bg-blue-100 hover:cursor-pointer"
                            onClick={() => {
                              createSideover('Detalhes do usuário', <UserDetails user={person} />)
                            }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Image width={40} height={40} className="h-10 w-10 rounded-full" src={person.image} alt={person.name} />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                  <div className="text-sm text-gray-500">{person.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Ativo
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{person.role}</div>
                              <div className="text-xs text-gray-500">{person.company}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <Pagination />

          </div>
          {/* /End replace */}
        </div>
      </div>
    </AdminTemplate>
  )
}


