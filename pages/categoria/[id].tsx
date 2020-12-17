import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import Container from '@/components/container'
import Nav from '@/components/nav'
import Layout from '@/components/layout'

function EditEntryPage({users}) {
  console.log(users);
  if (users) {
    let texto = "";
    if(users.nombre === "PERSONAL SUMMARY"){
      texto = "el intro";
    } else {
      texto = "No es....";
    }
    return (

      <Layout home="detalle">
        <Nav title={users.nombre} />
        <Container className={` home ${users.nombre}`}>
            <h1 className="font-bold text-3xl my-2">{users.nombre}</h1>
            <p style={{ color: "#fff"}}>{texto}</p>
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout home="detalle">
        <Nav title="DETALLE" />
        <Container>
          <div className="container">
            <h1 className="font-bold text-3xl my-2">...</h1>
            <p>...</p>
          </div>
        </Container>
      </Layout>
    )
  }
}

EditEntryPage.getInitialProps = async ({req, res, query}) => {
  const fetchRelative = path => {
    const {origin} = absoluteUrl(req, 'localhost:3000');
    return fetch(`${origin}${path}`);
  }
  const { id } = query
  const resp = await fetchRelative(`/api/get-categoria?id=${id}`);
  const users = await resp.json();
  return {users}
}

export default EditEntryPage;