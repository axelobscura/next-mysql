import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'

import Navbar from 'react-bootstrap/Navbar'

function Nav({ title = '', home = "entradas", secciones }) {
  return (
    <Container>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link href="/">
            <a className="font-light text-3xl"><span className="lnr lnr-home"></span></a>
          </Link>
          {secciones ? secciones.map((e) => (
              <Link key={e.id} href={`/category/${e.ref}`}>
                <a className="font-light text-3xl"  style={{
                  color: title === e.nombre ? '#333' : '#fff'
                }}>
                  <span className="lnr lnr-arrow-right"></span> {e.nombre}
                  </a>
              </Link>
          )) : ""}
          {/* 
          <Link href="/entradas">
            <a className="font-light text-3xl">ENTRADAS</a>
          </Link>
          */}
        </Navbar.Collapse>
        {/* 
        <ButtonLink href="/new" className="bg-dark entradas">{home ? ("AGREGAR ENTRADA") : ("NUEVA ENTRADA")}</ButtonLink>
        */}
      </Navbar>
    </Container>
  )
}

export default Nav;