import Nav from '@/components/nav'
import Container from '@/components/container'
import EntryForm from '@/components/entry-form'
import Layout from '@/components/layout'

export default function NewEntryPage() {
  return (
    <Layout home="nueva">
      <Nav title="NUEVA" />
      <Container className="w-full lg:w-2/4">
        <EntryForm />
      </Container>
    </Layout>
  )
}
