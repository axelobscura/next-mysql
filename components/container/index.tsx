function Container({ className = '', children }) {
  return <div className={'container-fluid mx-auto px-0' + className}>{children}</div>
}

export default Container
