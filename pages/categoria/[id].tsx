import { useRouter } from 'next/router'

import { useCategoria } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Nav from '@/components/nav'
import Layout from '@/components/layout'



function EditEntryPage({props}) {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useCategoria(id)
  console.log(props);
  if (data) {
    return (
      <Layout home="detalle">
        <Nav title={data.nombre} />
        <Container className={` home ${data.nombre}`}>
            <h1 className="font-bold text-3xl my-2">{data.nombre}</h1>
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout home="detalle">
        <Nav title="DETALLE" />
        <Container>
          <div className="container">
            <h1 className="font-bold text-3xl my-2">...</h1>
            <p>...</p>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default EditEntryPage;