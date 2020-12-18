import Container from '@/components/container'

function PersonalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1 style={{ color: "#fff"}}>{datos.nombre}</h1>
      <p>Senior Full Stack Web Developer with 17+ years of experience designing and developing backend architectures, decoupled and n-tier frontend web applications using HTML, CSS, JavaScript, JQuery, AJAX, JSON, XML, NodeJS, Express, PHP, MySQL, PosgressSQL,  Angular, ReactJS, VueJS, NextJS… </p>
    </Container>
  )
}


export default PersonalSummary;