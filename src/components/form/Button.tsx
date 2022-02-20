import classnames from 'classnames'
import { MouseEventHandler } from 'react'

export interface IButton {
  asLink?: boolean
  label: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  theme?: 'primary' | 'secondary' | 'accent' | 'link' | 'remove' | 'confirm'
  onClick?: MouseEventHandler<HTMLButtonElement>
  link?: string
  colors?: string
  className?: string
}

const sizeClasses = {
  'xs': 'px-2.5 py-1.5 text-xs rounded',
  'sm': 'px-3 py-2 text-sm leading-4 rounded-md',
  'md': 'px-4 py-2 text-sm rounded-md',
  'lg': 'px-4 py-2 text-base rounded-md',
  'xl': 'px-6 py-3 text-base rounded-md',
}

const themeClasses = {
  'primary': 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
  'secondary': 'bg-white hover:bg-slate-100 focus:ring-indigo-500 border border-slate-300 text-gray-600',
  'accent': 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500',
  'remove': 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-500',
  'confirm': 'bg-lime-600 hover:bg-lime-700 focus:ring-lime-500',
  'link': 'bg-transparent shadow-none text-indigo-500 focus:bg-slate-200 focus:ring-0 focus:ring-offset-0',
}

export default function Button({ asLink, type, size, label, onClick, link, className, colors, theme }: IButton) {

  const classes = classnames(
    'inline-flex items-center px-4 py-2 border border-transparent font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
    sizeClasses[size || 'md'],
    colors || themeClasses[theme || 'secondary'],
    className,
  )

  return asLink
    ? <a
      href={link}
      className={classes}
    >
      { label }
    </a>
    : <button
      type={type || 'button'}
      className={classes}
      onClick={onClick}
    >
      { label }
    </button>
}
