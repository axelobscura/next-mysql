import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function PersonalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1 style={{ color: "#fff"}}><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <p><b>Senior Full Stack Developer with 17+ years of Experience</b> Designing and Developing <b>Backend</b> architectures, decoupled and entier <b>Frontend</b> web applications using <b>HTML, CSS, JavaScript, Typescript, React.JS, React.Native, Angular.JS, Vue.JS, Next.JS, JQuery, AJAX, JSON, XML, Node.JS, Express.JS, PHP, MySQL, PostgressSQL…</b> </p>
      <Devicons />
      <Row className="m-0 pb-5">
        <Col md={6}>
          <ul style={{ paddingLeft: '100px'}}>
            <li><b>Great experience</b> in the IT industry building Web Based Applications and Single Page Applications <b>Frontend/Backend</b></li>
            <li><b>Extensive experience</b> in developing Web based applications (Single Page Apps) and <b>Client/Server applications</b> using <b>HTML</b>, <b>CSS</b>, <b>JAVASCRIPT</b>, <b>Angular</b>, <b>React.JS</b>, <b>Vue.JS</b>, Jquery, AJAX, <b>PHP</b>, <b>PYTHON</b>, <b>JAVA</b>, <b>R</b>, <b>JSON</b>, XML, <b>Node.JS</b>, <b>Express.JS</b>, PHP, <b>D3.JS</b>, Flex, MySQL, MongoDB</li>
            <li>Developed, Configured and Deployed <b>fault-tolerant</b>, scalable websites using <b>AWS - Azure</b></li>
            <li>Experience in using <b>Bootstrap, Material Design, Grid, Flex, Skeleton, Styled Components</b> for layouts, forms, buttons in the application</li>
            <li>Great experience using <b>CSS</b> processors <b>SASS, LESS</b></li>
            <li>Experience with designing and developing <b>REST API's</b> using <b>Node.js, Express.js, PHP, SQL, POSTGRESS, MONGODB, JSON</b></li>
            <li>Great experience with NodeJS, and Extensive experience with <b>JAMStack-Object Oriented JavaScript</b> and ES6/9 Standard</li>
            <li><b>Heavy use of GIT, GITLAB</b> for version control</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul style={{ paddingRight: '100px'}}>
            <li><b>Actively took part in all phases</b> of <b>development life-cycle including design, architecture, implementation, release, unit testing, refactoring and maintenance</b></li>
            <li>Knowledge and experience on installation and configuration of <b>WordPress, MySQL, PHP, and WordPress plugins, Joomla, Drupal, Magento, Woocommerce</b></li>
            <li>Experience working extensively on both <b>LYNUX, MAC and Windows</b> based Environments</li>
            <li>Extensive experience using <b>Adobe Design Tools</b> (Photoshop, Illustrator, Indesign, Premiere, After-efects)</li>
            <li>Experience in documentation using <b>MS tools</b> (Word, Excel, PPT, Project and Access)</li>
            <li><b>Expert</b> in creating <b>Templates, Mockups and Prototypes, Web Interfaces, Layouts and Flow of future pages</b></li>
            <li>Experience in Manual and Automated <b>testing</b> of software applications</li>
            <li><b>Good team player</b> with <b>Excellent Communication</b> skills and Ability to <b>Learn and Adapt</b> quickly to <b>EMERGING TECHNOLOGIES...</b></li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}


export default PersonalSummary;