import type { ComponentPropsWithoutRef } from 'react'
import { useFormContext } from 'react-hook-form'

export type InputProps = {
  label: string
  id: string
  placeholder?: string
  helperText?: string
} & ComponentPropsWithoutRef<'input'>

function Input(props: InputProps) {
  const { label, id, helperText, ...rest } = props
  const { register } = useFormContext()

  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gray-700">{label}</label>
      <input
        type="text"
        id={id}
        className="mt-1 relative w-full border-gray-300 shadow-sm rounded-md focus:ring-red-500"
        {...register(id)}
        {...rest}
      />
      {helperText && (<span className="text-xs text-gray-500">{helperText}</span>)}
    </div>
  )
}

export default Input
