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
          <h1><span className="lnr lnr-arrow-right"></span> PROPUESTA DE DESARROLLO</h1>
          <hr/>
          <div style={{ maxWidth: '90%', margin: 'auto', fontSize: '0.8rem', marginTop: '20px'}}>
            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan="4"><h2><span class="lnr lnr-arrow-right-circle"></span> DISEÑO Y DESARROLLO WEB</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th>TIEMPO</th>
                      <th>COSTO</th>
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
                      <th colSpan="4"><h2><span class="lnr lnr-arrow-right-circle"></span> IMPLEMENTACIÓN CRM</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th>TIEMPO</th>
                      <th>COSTO</th>
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

            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan="4"><h2><span class="lnr lnr-arrow-right-circle"></span> PARAMETRIZACIÓN DE MONDAY</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th>TIEMPO</th>
                      <th>COSTO</th>
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

            <Row>
              <Col>
                <Table striped bordered style={{ color: "#fff"}}>
                  <thead>
                    <tr>
                      <th colSpan="4"><h2><span class="lnr lnr-arrow-right-circle"></span> GOOGLE ANALITYCS / GOOGLE ADDS</h2></th>
                    </tr>
                    <tr>
                      <th>ENTREGABLES</th>
                      <th>TIEMPO</th>
                      <th>COSTO</th>
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