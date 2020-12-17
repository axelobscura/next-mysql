import React from 'react';
import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import { useCategorias } from '@/lib/swr-hooks'

import Link from 'next/link'

function IndexPage() {
  const { categorias, isLoading } = useCategorias()
  if (isLoading) {
    return (
      <Layout home="home">
      <div>
        <Nav />
        <Container className=" home">
          <Jumbotronix title="AXEL LAURENT OBSCURA SARZOTTI" />
        </Container>
      </div>
    </Layout>
    )
  }
  return (
    <Layout home="home">
      <div>
        <Nav />
        <Container className=" home">
          <Jumbotronix title="AXEL LAURENT OBSCURA SARZOTTI" />
          <div className="d-flex categorias">
            {categorias.map((e) => (
              <div key={e.id} className="py-2">
                <Link href={`/categoria/${e.id}`}><p>{e.nombre} <span className="lnr lnr-arrow-right"></span></p></Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage;