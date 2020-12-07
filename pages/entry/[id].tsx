import { useRouter } from 'next/router'

import { useEntry } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Nav from '@/components/nav'

export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useEntry(id)

  if (data) {
    return (
      <>
        <Nav title="DETALLE" />
        <Container>
          <div className="container" style={{ boxShadow: '0 0 10px #dedede', height: '100vh' }}>
            <h1 className="font-bold text-3xl my-2">{data.title}</h1>
            <p>{data.content}</p>
          </div>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Nav title="DETALLE" />
        <Container>
          <div className="container">
            <h1 className="font-bold text-3xl my-2">...</h1>
            <p>...</p>
          </div>
        </Container>
      </>
    )
  }
}
