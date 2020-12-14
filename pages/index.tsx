import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import { useEntries } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
      <Layout home>
        <div>
          <Nav />
          <Container>
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
            <div className="my-4" />
            <Skeleton width={180} height={24} />
            <Skeleton height={48} />
          </Container>
        </div>
      </Layout>
    )
  }

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
