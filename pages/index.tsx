import React, { useState, useEffect } from 'react';
import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import Link from 'next/link'
import { useCategorias } from '@/lib/swr-hooks'

function IndexPage({stars}) {
  const { categorias, isLoading } = useCategorias()
  console.log("Las categos: " + JSON.stringify(categorias))
  console.log("Las estrellas: " + JSON.stringify(stars))
  return (
    <Layout home="home">
      <div>
        <Nav />
        <Container className=" home">
          <Jumbotronix title="AXEL LAURENT OBSCURA SARZOTTI" />
          <div className="d-flex categorias">
            {stars.map((e) => (
              <div key={e.id} className="py-2">
                <Link href={`/entry/${e.id}`}><p>{e.nombre}</p></Link>
              </div>
            ))
            }
          </div>
        </Container>
      </div>
    </Layout>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://next-mysql-steel.vercel.app/api/get-categorias')
  const json = await res.json()
  return { stars: json }
}

export default IndexPage;