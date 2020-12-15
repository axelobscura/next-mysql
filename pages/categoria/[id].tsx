import { useRouter } from 'next/router'

import { useCategoria } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Nav from '@/components/nav'
import Layout from '@/components/layout'

export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useCategoria(id)

  if (data) {
    return (
      <Layout home="detalle">
        <Nav title="DETALLE" />
        <Container>
          <div className="container" style={{ boxShadow: '0 0 10px #dedede', height: '100vh' }}>
            <h1 className="font-bold text-3xl my-2">{data.nombre}</h1>
          </div>
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
