import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Education({ datos }) {
    return (
        <Container className={` home ${datos.nombre}`}>
            <h1><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
            <Devicons />
            <hr/>
            <Row className="m-0 p-0" style={{ marginTop: '30px'}}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Universidad Nacional Autónoma de México</Card.Title>
                            <Card.Text>
                                Maestría en diseño y programación WEB<br />Disciplina académicaDiseño WEB, Animación 3D, Ilustración, Diseño Editorial<br /><br />Fecha de graduación prevista2006 – 2008<br /><br />Actividades y asociaciones: Desarrollo de aplicaciones en la maestría en Artes Visuales
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Universidad Autónoma Metropolitana</Card.Title>
                            <Card.Text>
                                Maestría en diseño y programación WEB<br />Disciplina académicaDiseño WEB, Animación 3D, Ilustración, Diseño Editorial<br /><br />Fecha de graduación prevista2006 – 2008<br /><br />Actividades y asociaciones: Desarrollo de aplicaciones en la maestría en Artes Visuales
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                        <Card.Body>
                            <Card.Title>Universidad Nacional Autónoma de México</Card.Title>
                            <Card.Text>
                                Maestría en diseño y programación WEB<br />Disciplina académicaDiseño WEB, Animación 3D, Ilustración, Diseño Editorial<br /><br />Fecha de graduación prevista2006 – 2008<br /><br />Actividades y asociaciones: Desarrollo de aplicaciones en la maestría en Artes Visuales
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            


        </Container>
    )
}


export default Education;