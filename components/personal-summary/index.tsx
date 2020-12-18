import Container from '@/components/container'

function PersonalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1 style={{ color: "#fff"}}><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <p><b>Senior Full Stack Web Developer with 17+ years of experience</b> designing and developing <b>Backend</b> architectures, decoupled and n-tier <b>Frontend</b> web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL,  Angular, ReactJS, VueJS, NextJS… </p>
      <ul>
        <li>Great experience in the IT industry building Web Based Applications and Single Page Applications <b>Frontend/Backend</b></li>
        <li>Extensive experience in developing Web based applications (Single Page Apps) and <b>Client/Server applications</b> using HTML5, CSS, <b>JavaScript</b>, <b>Angular</b>, <b>React.JS</b>, <b>Vue.JS</b>, Jquery, AJAX, JSON, XML, <b>Node.JS</b>, Express, PHP, <b>D3.JS</b>, Flex, MySQL, MongoDB</li>
        <li>Developed, Configured and Deployed <b>fault-tolerant</b>, scalable websites using <b>AWS - Azure</b></li>
        <li>Experience in using <b>Bootstrap, Material Design, Grid, Flex, Skeleton, Styled Components</b> for layouts, forms, buttons in the application</li>
        <li>Great experience using CSS processors <b>SASS, LESS</b></li>
        <li>Experience with designing and developing <b>REST API's</b> using <b>NODE, EXPRESS, SQL, POSTGRESS, MONGODB, JSON</b></li>
        <li>Great experience with NodeJS, and Extensive experience with <b>JAMStack-Object Oriented JavaScript</b> and ES6/9 Standard</li>
        <li>Actively took part in all the phases of the <b>development life-cycle including design, architecture, implementation, release, unit testing, refactoring and maintenance</b></li>
        <li><b>Heavy use of GIT, GITLAB</b> for version control</li>
        <li>Knowledge and experience on installation and configuration of <b>WordPress, MySQL, PHP, and WordPress plugins, Joomla, Drupal, Magento, Woocommerce</b></li>
        <li>Experience working extensively on both <b>LYNUX, MAC and Windows</b> based Environments</li>
        <li>Extensive experience using <b>Adobe Design Tools</b> (Photoshop, Illustrator, Indesign, Premiere, After-efects)</li>
        <li>Experience in documentation using <b>MS tools</b> (Word, Excel, PPT, Project and Access)</li>
        <li><b>Expert</b> in creating <b>Templates, Mockups and Prototypes, Web Interfaces, Layouts and Flow of future pages</b></li>
        <li>Experience in Manual and Automated <b>testing</b> of software applications</li>
        <li><b>Good team player</b> with <b>excellent communication</b> skills and Ability to <b>learn and adapt</b> quickly to <b>EMERGING TECHNOLOGIES...</b></li>
      </ul>
    </Container>
  )
}


export default PersonalSummary;