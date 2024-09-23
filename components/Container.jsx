const Container = ({ children, customStyle, ...otherProps }) => {
  return (
    <div className={`w-full mx-auto ${customStyle}`} {...otherProps}>
      {children}
    </div>
  )
}

export default Container
