import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfessionalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <hr/>  
      <Devicons />
      <hr/>
      <Row>
        <Col md={6}>
            <p className="text-justify pt-3">Senior Full Stack Web Developer with 15 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL, Angular, ReactJS, VueJS, NextJS...</p>
        </Col>
        <Col md={6}>

        </Col>
      </Row>
    </Container>
  )
}


export default ProfessionalSummary;