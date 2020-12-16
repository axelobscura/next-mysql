import React, { useState, useEffect } from 'react';
import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import Link from 'next/link'
import { useCategorias } from '@/lib/swr-hooks'

function IndexPage({stars}) {

  return (
    <Layout home="home">
      <div>
        <Nav />
        <Container className=" home">
          <Jumbotronix title="AXEL LAURENT OBSCURA SARZOTTI" />
          <div className="d-flex categorias">
            {stars ? stars.map((e) => (
              <div key={e.id} className="py-2">
                <Link href={`/categoria/${e.id}`}><p>{e.nombre} <span className="lnr lnr-arrow-right"></span></p></Link>
              </div>
            )) : "CARGANDO LOS DATOS"}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://next-mysql.axosar.vercel.app/api/get-categorias')
  const json = await res.json()
  return { stars: json }
}

export default IndexPage;