import classNames from 'classnames'
import Input, { IInput } from '@/components/Input'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export interface IInputControl extends IInput {
  label: string
  help?: string
}

export default function InputControl({ label, help, type, name, id, placeholder, size, isInvalid, value, onChange }: IInputControl) {
  const helpClasses = classNames(
    `mt-1 text-xs`,
    {
      'text-gray-500': !isInvalid,
      'text-red-600': isInvalid,
    },
  )

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        { label }
      </label>
      <div className="mt-1 relative">
        <Input {...{ type, name, id, placeholder, size, isInvalid, value, onChange }} />
        { isInvalid && <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>}
      </div>
      { help && <p className={helpClasses} id={`${id || name}-help`}>{ help }</p>}
    </div>
  )
}
