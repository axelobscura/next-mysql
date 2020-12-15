import Nav from '@/components/nav'
import Container from '@/components/container'
import Layout from '@/components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import Link from 'next/link'
import { useCategorias } from '@/lib/swr-hooks'

function IndexPage() {
  const { categorias, isLoading } = useCategorias()
  console.log("Las categos: " + JSON.stringify(categorias))

  return (
    <Layout home="beehive">
      <div>
        <Container className=" beehive">
          <img src='../../logoM.png' alt="" title="" style={{ width: '200px', margin: 'auto', padding: '10px'}} />
          <h1><span className="lnr lnr-arrow-right"></span> PROPUESTA DE DESARROLLO</h1>
          <p><span className="lnr lnr-arrow-right-circle"></span> PRESUPUESTO ESTIMADO DE DESARROLLO DE INTEGRACIÓN DE SERVICIOS DIGITALES (https://techno-solutions.net/).</p>
          <hr/>
          <div style={{ maxWidth: '90%', margin: 'auto', fontSize: '0.8rem', marginTop: '20px'}}>
            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan={4}><h2><span className="lnr lnr-arrow-right-circle"></span> DISEÑO Y DESARROLLO WEB</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th className="text-center">TIEMPO</th>
                      <th className="text-center">COSTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul className="contenido">
                          <li>Desarrollo de 3 propuestas de diseño/template responsiva adaptable a cualquier tamaño de dispositivo (teléfonos, Tabletas, Escritorio). Desarrollo con HTML5, bootstrap, flexbox, grid, HTML, CSS, Javascript, Jquery, etc...</li>
                          <li>SEO, Posicionamiento orgánico en base a inserción de metadatos (keywords - description) en contenidos con seguimietno puntual de google analitycs.</li>
                          <li>Creación e implementación de cuentas de correo electrónico.</li>
                          <li>Desarrollo e instalación de base de datos / MySQL - Persistencia de datos para el administrador de contenidos / desarrollo de catálogo de productos.</li>
                          <li>Colocación en base a propuesta de todos los contenidos / catálogo / textos / imágenes / formularios de contacto / galerías, etc...</li>
                          <li>Desarrollo y Configuración de módulos y widgets personalizados / Venta en línea.</li>
                          <li>Desarrollo e implementación de registro de usuarios (API - Facebook, twitter), panel de control por usuario, panel de administración de productos y datos por usuario.</li>
                        </ul>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-center">15 Días Hábiles</td>
                      <td className="text-center">$ 1,500.00 MXN</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan={4}><h2><span className="lnr lnr-arrow-right-circle"></span> IMPLEMENTACIÓN CRM | bitrix24</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th className="text-center">TIEMPO</th>
                      <th className="text-center">COSTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul className="contenido">
                          <li>Seguimiento de nombres, correos electrónicos y números de teléfono de clientes potenciales</li>
                          <li>Concentra toda la información relevante sobre tus clientes en una base de datos.</li>
                          <li>Optimizar el tiempo gracias a la automatización de procesos repetitivos.</li>
                          <li>Facilita la gestión de estrategias de comunicación e interacción al integrar los datos de varias plataformas en un solo lugar.</li>
                          <li>Potencia la capacidad de trabajo gracias a las herramientas adicionales que brinda a tus colaboradores.</li>
                          <li>Te da una visión crítica sobre el estado de tu empresa, campañas y estrategias de comunicación. Dentro de sus funciones contempla la creación y entrega de análisis, reportes e informes.</li>
                          <li>Facilita la creación y mejoramiento de nuevos perfiles de buyer persona.</li>
                          <li>Mejora los criterios dentro de tu empresa para identificar nuevos leads y prospectos.</li>
                        </ul>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-center">10 Días Hábiles</td>
                      <td className="text-center">$ 2,000.00 MXN</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan={4}><h2><span className="lnr lnr-arrow-right-circle"></span> PARAMETRIZACIÓN DE MONDAY</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th className="text-center">TIEMPO</th>
                      <th className="text-center">COSTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul className="contenido">
                          <li>Configuración de cuentas y roles de usuario</li>
                          <li>Configuración de tracker de tareas diarias</li>
                          <li>Configuración de seguimientos de proyectos</li>
                          <li>Configuración de seguimiento de pusntos de venta</li>
                          <li>Configuración de planificación de ventos</li>
                          <li>Configuración y seguimiento de campañas/leads en redes sociales</li>
                          <li>Configuración de calendario de plan de trabajo</li>
                          <li>Configuración de seguimiento de clientes</li>
                          <li>Configuración de calendario de actividades semanales</li>
                          <li>Configuración de pipeline de ventas</li>
                        </ul>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-center">15 Días Hábiles</td>
                      <td className="text-center">$ 2,500.00 MXN</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan={4}><h2><span className="lnr lnr-arrow-right-circle"></span> GOOGLE ANALITYCS / GOOGLE ADDS</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th className="text-center">TIEMPO</th>
                      <th className="text-center">COSTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul className="contenido">
                          <li>Desarrollo de 3 propuestas de diseño/template responsiva adaptable a cualquier tamaño de dispositivo (teléfonos, Tabletas, Escritorio). Desarrollo con HTML5, bootstrap, flexbox, grid, HTML, CSS, Javascript, Jquery, etc...</li>
                        </ul>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-center">15 Días Hábiles</td>
                      <td className="text-center">$ 1,500.00 MXN</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>

        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage;