import Container from '@/components/container'
import Devicons from '@/components/devicons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProfessionalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre} p-0 m-0`}>
      <h1><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <Devicons />
      <Row>
        <Col md={6} className="p-0">
            <p className="text-justify pt-3">Senior Full Stack Web Developer with 15 years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL, Angular, ReactJS, VueJS, NextJS...</p>
        </Col>
        <Col md={6} className="p-0">
            <h2 className="pt-3"><span className="lnr lnr-chevron-right"></span> WEB TECHNOLOGIES</h2>
            <p>HTML, HTML 5, XHTML, XML, JavaScript, AJAX, JQuery, CSS, UI Concept Modeling/Wire framing, Angular, Cascading Style Sheets (CSS), jQuery, JSON, Bootstrap, WordPress, PHP, Cake, Zend, Angular JS, React JS, Vue JS, Require JS, Extend JS, Node JS, DHTML, AWS, Azure</p>
            <h2><span className="lnr lnr-chevron-right"></span> JavaScript Lib/Framework</h2>
            <p>Angular JS, React JS, NodeJs, VueJs, ExpressJs, Redux, D3</p>
            <h2><span className="lnr lnr-chevron-right"></span> Scripting Languages</h2>
            <p>JavaScript, PHP, C#, Java, Python</p>
            <h2><span className="lnr lnr-chevron-right"></span> IDE, HTML Editor</h2>
            <p>Atom, Visual Studio, WebStorm, Notepad++, Sublime Text, Netbeans</p>
            <h2><span className="lnr lnr-chevron-right"></span> Databases</h2>
            <p>ORACLE 10g/11g, SQL Server, MySQL, Teradata, MongoDB, Postgress</p>
            <h2><span className="lnr lnr-chevron-right"></span> Operating Systems</h2>
            <p>Windows 98, 2000, XP, 7, 10, OSX, RHEL, CentOS, Ubuntu</p>
            <h2><span className="lnr lnr-chevron-right"></span> Graphic & WEB</h2>
            <p>Photoshop, Illustrator, Premiere, After Effects, SVG, Autocad</p>
        </Col>
      </Row>
    </Container>
  )
}


export default ProfessionalSummary;