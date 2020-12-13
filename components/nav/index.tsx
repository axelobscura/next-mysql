import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'

import Navbar from 'react-bootstrap/Navbar'


export default function Nav({ title = 'ENTRADAS', home }) {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link href="/">
            <a className="font-light text-3xl">{title}</a>
          </Link>
        </Navbar.Collapse>
        <ButtonLink href="/new">{home ? ("BIENVENIDO") : ("NUEVA ENTRADA")}</ButtonLink>
      </Navbar>
    </Container>
  )
}
