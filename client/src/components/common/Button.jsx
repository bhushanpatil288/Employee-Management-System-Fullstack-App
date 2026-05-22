function Button({
  children,
  handleClick,
  className,
  ...rest
}) {
  return (
    <button
      onClick={handleClick}
      className={`${className} py-2 px-4 rounded`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button