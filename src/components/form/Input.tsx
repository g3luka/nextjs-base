import classnames from 'classnames'
import { ChangeEventHandler } from 'react'

export interface IInput {
  name: string
  type?: 'text' | 'email' | 'number'
  required?: boolean
  placeholder?: string
  id?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  isInvalid?: boolean
  value?: string | number | readonly string[]
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const sizeClasses = {
  'xs': 'text-xs rounded',
  'sm': 'text-sm leading-4 rounded-md',
  'md': 'text-sm rounded-md',
  'lg': 'text-base rounded-md',
  'xl': 'text-base rounded-md',
}

export default function Input({ type, name, required, id, placeholder, size, isInvalid, value, onChange }: IInput) {
  const classes = classnames(
    sizeClasses[size || 'md'] as String,
    {
      'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300': !isInvalid,
      'focus:ring-red-500 focus:border-red-500 border-red-300 text-red-900 placeholder-red-300': isInvalid,
    },
    `shadow-sm  block w-full sm:text-sm rounded-md`,
  )

  return (
    <input
      type={type || 'text'}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className={classes}
      value={value}
      onChange={onChange}
    />
  )
}
