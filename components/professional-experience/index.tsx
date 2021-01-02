import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfessionalExperience({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <Devicons />
    </Container>
  )
}


export default ProfessionalExperience;