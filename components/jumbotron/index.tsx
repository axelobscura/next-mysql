import Container from '@/components/container'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Jumbotronix({ title = 'Entries' }) {
  return (
    <div className="container mt-3">
      <Jumbotron fluid className="text-center eljumbo mb-0">
        <Container>
          <h1>{title}</h1>
          <p>
            FULL STACK DEVELOPER
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}
