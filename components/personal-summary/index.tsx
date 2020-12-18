import Container from '@/components/container'

function PersonalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1 style={{ color: "#fff"}}><span className="lnr lnr-chevron-right"></span> {datos.nombre}</h1>
      <p><b>Senior Full Stack Web Developer with 17+ years of experience</b> designing and developing <b>Backend</b> architectures, decoupled and n-tier <b>Frontend</b> web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL,  Angular, ReactJS, VueJS, NextJS… </p>
      <ul>
        <li>Great experience in the IT industry building Web Based Applications and Single Page Applications fontend/backend</li>
        <li>Extensive experience in developing Web based applications (Single Page Apps) and Client/Server applications using HTML5, CSS, JavaScript, Angular (1-7), ReactJS, VueJS, Jquery, AJAX, JSON, XML, NodeJS, Express, PHP, VueJS, D3JS, Flex, MySQL, MongoDB</li>
        <li>Developed, Configured and Deployed fault-tolerant, scalable websites using AWS - Azure</li>
        <li>Experience in using Bootstrap, Material Design, Flex for layout, forms, buttons in the application</li>
        <li>Great experience using CSS processors SASS, LESS</li>
        <li>Experience with designing and developing REST APIs using NODE, EXPRESS, MONGODB, JSON</li>
        <li>Great experience with NodeJS, and Extensive experience with Object Oriented JavaScript and ES6/7 Standard</li>
        <li>Actively took part in all the phases of the development life-cycle including design, architecture, implementation, release, unit testing, refactoring and maintenance</li>
        <li>Heavy use of GIT, GITLAB for version control</li>
        <li>Knowledge and experience on installation and configuration of WordPress, MySQL, PHP, and WordPress plugins, Joomla, Drupal, Magento, Woocommerce</li>
        <li>Experience working extensively on both MAC and Windows based Environments</li>
        <li>Extensive experience using Adobe Design Tools (Photoshop, Illustrator, Indesign, Premiere, After-efects)</li>
        <li>Experience in documentation using MS tools (Word, Excel, PPT, Project and Access)</li>
        <li>Expert in creating Templates, Mockups and Prototypes, Web Interfaces, Layouts and Flow of future pages</li>
        <li>Experience in Manual and Automated testing of software applications</li>
        <li>Good team player with excellent communication skills and Ability to learn and adapt quickly to the emerging new web and mobile technologies</li>
      </ul>
    </Container>
  )
}


export default PersonalSummary;