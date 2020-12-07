import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'

import Navbar from 'react-bootstrap/Navbar'


export default function Nav({ title = 'Entries' }) {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link href="/"><b>NEXT</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
        </Navbar.Collapse>
        <ButtonLink href="/new">New Entry</ButtonLink>
      </Navbar>
    </Container>
  )
}
