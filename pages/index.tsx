import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import { useCategorias } from '@/lib/swr-hooks'

function IndexPage() {
  const { categorias, isLoading } = useCategorias()
  console.log("Las categos: " + JSON.stringify(categorias))
  return (
    <Layout home="home">
      <div>
        <Nav />
        <Container className=" home">
          <Jumbotronix title="AXEL LAURENT OBSCURA SARZOTTI" />
          <div className="d-flex categorias">
          {categorias ? categorias.map((e) => (
            <div key={e.id} className="py-2">
              <p>{e.nombre}</p>
            </div>
          )) : "LOADING DATA"}
          </div>
          
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage;
