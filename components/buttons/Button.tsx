export type ButtonProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

function Button(props: ButtonProps) {
  const { children, className, ...rest } = props
  return (
    <button
      className={` 
      ${className}
        px-4
        py-2
        shadow
        rounded
        border
        border-purple-500
        bg-purple-500
        text-white  
        text-center
        font-bold
        transition
        hover:bg-purple-400
        hover:border-black-400
        hover:border-dashed
        hover:font-medium
      `}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
