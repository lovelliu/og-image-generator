import { useFormContext } from 'react-hook-form'

export type SelectProps<T = string> = {
  label: T
  id: T
  helperText?: T
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'select'>

function Select(props: SelectProps) {
  const { id, label, className, helperText, children, ...rest } = props
  const { register } = useFormContext()
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gray-700">{label}</label>
      <select
        id={id}
        className={`${className} mt-1 relative border-gray-300 shadow-sm rounded-md focus:ring-red-500`}
        {...register(id)}
        {...rest}>{children}</select>
        {helperText && (<p className="mt-1 text-xs text-gray-500">{helperText}</p>)}
    </div>
  )
}

export default Select
