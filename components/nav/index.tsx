import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'

import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'


export default function Nav({ title = 'Entries' }) {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link href="/">React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
        </Navbar.Collapse>
        <ButtonLink href="/new">New Entry</ButtonLink>
      </Navbar>
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
        </div>
      </nav>
    </Container>
  )
}
