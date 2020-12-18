import React from 'react';
import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';
import Nav from '@/components/nav'
import Container from '@/components/container'
import Jumbotronix from '@/components/jumbotron'
import Layout from '@/components/layout'

import Link from 'next/link'

function IndexPage({users}) {
  return (
    <Layout home="home">
      <div>
        <Nav />
        <Container className=" home">
          <Jumbotronix title="M.A.V. AXEL LAURENT OBSCURA SARZOTTI" />
          <div className="d-flex categorias">
            {users.map((e) => (
              <div key={e.id} className="py-2">
                <Link href={`/category/${e.ref}`}><p>{e.nombre} <span className="lnr lnr-arrow-right"></span></p></Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

IndexPage.getInitialProps = async ({req, res}) => {
  const fetchRelative = path => {
    const {origin} = absoluteUrl(req, 'localhost:3000');
    return fetch(`${origin}${path}`);
  }
  const resp = await fetchRelative(`/api/get-categorias`);
  const users = await resp.json();
  return {users}
}

export default IndexPage;