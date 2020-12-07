import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Entries from '@/components/entries'
import Jumbotronix from '@/components/jumbotron'

import { useEntries } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { entries, isLoading } = useEntries()

  if (isLoading) {
    return (
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
    )
  }

  return (
    <div>
      <Nav />
      <Container>
        <Jumbotronix title="PRUEBA DE APIS" />
        <Entries entries={entries} />
      </Container>
    </div>
  )
}
