import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfessionalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1 style={{ color: "#fff"}}><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <Devicons />
      <hr/>
      <Row>
        <Col md={6}>

        </Col>
        <Col md={6}>

        </Col>
      </Row>
    </Container>
  )
}


export default ProfessionalSummary;