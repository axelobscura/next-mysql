import Container from '@/components/container'

function PersonalSummary({datos}) {
  return (
    <Container className={` home ${datos.nombre}`}>
      <h1 style={{ color: "#fff"}}>{datos.nombre}</h1>
    </Container>
  )
}


export default PersonalSummary;