import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import { useEntries } from '@/lib/swr-hooks'

export default function IndexPage() {
  return (
    <Layout home="home">
      <div>
        <Nav />
        <Container>
          <Jumbotronix title="PRUEBA DE APIS" />
        </Container>
      </div>
    </Layout>
  )
}
