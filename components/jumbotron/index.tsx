import Container from '@/components/container'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Jumbotronix({ title = 'Entries' }) {
  return (
    <div className="container mt-3">
      <Jumbotron fluid className="text-center eljumbo mb-0">
        <Container>
          <h1>{title}</h1>
          <p className="intro">
            <b>SR. FULL STACK DEVELOPER</b>
          </p>
          <p className="pr-5 pl-5"><small>Senior Full Stack Developer with 17+ years of experience designing and developing backend architectures, decoupled and entier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL, Angular, ReactJS, VueJS, NextJS, Ruby on Rails, Python, R, Mongo and much more...</small></p>
        </Container>
      </Jumbotron>
    </div>
  )
}
