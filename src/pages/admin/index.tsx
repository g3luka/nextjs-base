import AdminTemplate from '@/templates/AdminTemplate'
import PageHeading from '@/components/PageHeading'
import StatsGroup, { IStatsGroupItem } from '@/components/StatsGroup'
import { navigation, userNavigation } from '@/helpers/admin-navigation'

const usersStats = [
  { name: 'Total Usuários', stat: '71.897', previousStat: '70.946', change: '1,34%', changeType: 'increase' },
  { name: 'Média de Ativos', stat: '62,33%', previousStat: '59,41%', change: '2,92%', changeType: 'increase' },
  { name: 'Média de Inativos', stat: '37,67%', previousStat: '40,59%', change: '2,92%', changeType: 'decrease' },
] as IStatsGroupItem[]

const companiesStats = [
  { name: 'Total Empresas', stat: '2', previousStat: '1', change: '50%', changeType: 'increase' },
  { name: 'Novas', stat: '1', previousStat: '0', change: '50%', changeType: 'increase' },
  { name: 'Encerradas', stat: '0%', previousStat: '0%', change: '0%', changeType: 'increase' },
] as IStatsGroupItem[]

export default function AdminPage() {
  return (
    <AdminTemplate navigation={navigation} userNavigation={userNavigation}>
      <div className="py-6">

        <PageHeading useRoute title="Resumo geral" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">

            <StatsGroup title="Usuários" stats={usersStats} className="mt-6" />
            <StatsGroup title="Empresas" stats={companiesStats} className="mt-6" />

          </div>
        </div>
      </div>
    </AdminTemplate>
  )
}


