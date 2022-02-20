import Image from 'next/image'
import AdminTemplate from '@/templates/AdminTemplate'
import PageHeading from '@/components/PageHeading'
import Pagination from '@/components/Pagination'
import Button from '@/components/form/Button'
import ExampleForm from '@/screens/ExampleForm'
import StatsGroup, { IStatsGroupItem } from '@/components/StatsGroup'
import { navigation, userNavigation } from '@/helpers/admin-navigation'
import { useStore as useSideover } from '@/store/Sideover'

const stats = [
  { name: 'Total Empresas', stat: '2', previousStat: '1', change: '50%', changeType: 'increase' },
  { name: 'Novas', stat: '1', previousStat: '0', change: '50%', changeType: 'increase' },
  { name: 'Encerradas', stat: '0%', previousStat: '0%', change: '0%', changeType: 'increase' },
] as IStatsGroupItem[]

const companies = [
  {
    name: 'Google',
    title: 'Google LLC',
    email: 'ceo@google.com',
    imageUrl: 'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=90',
  },
  {
    name: 'Amazon AWS',
    title: 'Amazon Web Services, Inc.',
    email: 'ceo@aws.amazon.com',
    imageUrl: 'https://images.unsplash.com/photo-1577732024748-f6ba00087e33?&ixlib=js-2.0.0&fp-x=0.55&fp-y=0.72&fp-z=1&crop=focalpoint&fit=crop&w=200&h=150&q=90',
  },
  {
    name: 'Microsoft',
    title: 'Microsoft Corporation (MSFT)',
    email: 'ceo@microsoft.com',
    imageUrl: 'https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=90',
  },
  {
    name: 'Facebook',
    title: 'Facebook, Inc.',
    email: 'ceo@facebook.com',
    imageUrl: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=150&q=90',
  },
]

export default function AdminCompaniesPage() {
  const { create: createSideover } = useSideover(store => store.actions)
  return (
    <AdminTemplate navigation={navigation} userNavigation={userNavigation}>
      <div className="py-6">

        <PageHeading useRoute actions={
          <Button
            label="Adicionar Novo"
            theme="primary"
            onClick={() => {
              createSideover('Adicionar Novo', <ExampleForm />, 'lg')
            }}
          />
        } />

        <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          <StatsGroup stats={stats} className="mt-8" />

          <div className="py-8">

            <ul role="list" className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {companies.map((company) => (
                <li key={company.email}
                  className="col-span-1 flex flex-col text-center bg-white border border-white rounded-lg shadow divide-y divide-gray-200 hover:border-blue-600 hover:shadow-md hover:shadow-blue-300"
                >
                  <div className="flex-1 flex flex-col p-8">
                    <Image
                      src={company.imageUrl}
                      width={200}
                      height={150}
                      // layout="fill"
                      alt={company.name}
                      className="w-32 h-32 flex-shrink-0 mx-auto"
                    />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{company.name}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500 text-sm">{company.title}</dd>
                    </dl>
                  </div>
                </li>
              ))}
            </ul>

            <Pagination />

          </div>
          {/* /End replace */}
        </div>
      </div>
    </AdminTemplate>
  )
}


