import classnames from 'classnames'
import { ChangeEventHandler } from 'react'

export interface ISelectOption {
  label: string
  value: string | number | undefined
}

export interface ISelect {
  label: string,
  name: string
  options: ISelectOption[]
  required?: boolean
  id?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isInvalid?: boolean
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: ChangeEventHandler<HTMLSelectElement>
}

const sizeClasses = {
  'xs': 'text-xs rounded',
  'sm': 'text-sm leading-4 rounded-md',
  'md': 'text-sm rounded-md',
  'lg': 'text-base rounded-md',
  'xl': 'text-base rounded-md',
}

export default function SelectControl({ label, name, onChange, id, size, required, isInvalid, value, defaultValue, options }: ISelect) {
  const classes = classnames(
    sizeClasses[size || 'md'] as String,
    {
      'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300': !isInvalid,
      'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-900 placeholder-red-300': isInvalid,
    },
    'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md',
  )
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        { label }
      </label>
      <select
        id={id}
        name={name}
        required={required}
        className={classes}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options.map(option => <option key={option.label} value={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
}
