import Container from '@/components/container'
import Jumbotron from 'react-bootstrap/Jumbotron'


export default function Jumbotronix({ title = 'Entries' }) {
  return (
    <div className="container">
      <Jumbotron fluid>
        <Container>
          <h1>{title}</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}
