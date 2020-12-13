import Layout from '../layout'

function Container({ className = '', children }) {
  return (
    <Layout home>
      <div className={'container-fluid mx-auto px-0' + className}>{children}</div>
    </Layout>
  )
}

export default Container
