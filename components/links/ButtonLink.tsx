export type ButtonLinkProps = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'a'>

function ButtonLink(props: ButtonLinkProps) {
  const { children, className, ...rest } = props
  return (
    <a
      className={`
        ${className}
        inline-block
        px-4
        py-2
        shadow-sm
        rounded
        text-center
        border
        border-gray-600
        bg-white
        font-bold
        transition
        hover:bg-gray-100
        hover:border-gray-300
        hover:font-medium
        hover:text-gray-500
      `}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  )
}

export default ButtonLink
