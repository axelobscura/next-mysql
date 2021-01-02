import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfessionalExperience({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <Devicons />
      <ul>
          <li>WEBINARS EN CONCRETO</li>
          <li>ADIP - GOBIERNO DE LA CIUDAD DE MÉXICO</li>
          <li>COLORCITI</li>
          <li>CONGRESOS AMGG</li>
          <li>PARALELO STUDIO</li>
          <li>IMCYC</li>
          <li>CONSTRUREMATES</li>
          <li>DISTILLERY - THRIVE MARKET</li>
          <li>TRYBÜ</li>
          <li>AUTOGALLEGO</li>
      </ul>
    </Container>
  )
}


export default ProfessionalExperience;