import { ChangeEvent, FormEvent, useState } from 'react'
import InputControl from '@/components/form/InputControl'
import Button from '@/components/form/Button'

interface ICompanyFormState {
  name: string,
  formalName?: string,
  cnpj?: string,
  email?: string,
  phone?: string,
  contactName?: string,
}

type IStateIndex = keyof ICompanyFormState

const initialState = {
  name: '',
  formalName: '',
  cnpj: '',
  email: '',
  phone: '',
  contactName: '',
}

export default function CompanyForm() {
  const [company, setCompany] = useState<ICompanyFormState>(initialState)

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const index: IStateIndex = event.target.name as IStateIndex
    setCompany((state: ICompanyFormState) => {
      state[index] = event.target.value
      return state
    })
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(company)
    alert(JSON.stringify(company, null, 2))
  }

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="px-4 divide-y divide-gray-200 sm:px-6">
        <form onSubmit={onSubmit} className="space-y-6 pt-6 pb-5">
          <InputControl name="name" label="Nome Amigável" onChange={onChange} required />
          <InputControl name="cnpj" label="CNPJ" onChange={onChange} required />
          <InputControl name="formalName" label="Razão Social" onChange={onChange} />
          <InputControl name="email" type="email" label="E-mail" help="Receberá as comunicações automáticas do sistema" onChange={onChange} required />
          <InputControl name="phone" label="Telefone" help="Para entrarmos em contato caso necessário" onChange={onChange} />
          <InputControl name="contactName" label="Nome do Contato" help="Pessoa que responde sobre a parceiria" onChange={onChange} />
          <Button type="submit" theme="primary" label="Adicionar Empresa" />
        </form>
      </div>
    </div>
  )
}
