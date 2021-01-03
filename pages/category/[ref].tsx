import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import Container from '@/components/container'
import Nav from '@/components/nav'
import Layout from '@/components/layout'
import PersonalSummary from '@/components/personal-summary'
import ProfessionalSummary from '@/components/professional-summary'
import ProfessionalExperience from '@/components/professional-experience'
import Education from '@/components/education'

function EditEntryPage({users, usersDos}) {
  if (users) {
    return (
      <Layout 
        home={users.nombre}
      >
        <Nav secciones={usersDos} title={users.nombre} />
        <Container>
          {users.nombre === "PERSONAL SUMMARY" ? 
            <PersonalSummary datos={users} />
          : users.nombre === "PROFESSIONAL SUMMARY" ?
            <ProfessionalSummary datos={users} />
          : users.nombre === "PROFESSIONAL EXPERIENCE" ?
            <ProfessionalExperience datos={users} />
            : users.nombre === "EDUCATION" ?
            <Education datos={users} />
          : ""}
        </Container>
      </Layout>
    )
  } else {
    return (
      <Layout home="detalle">
        <Nav secciones={usersDos} title="DETALLE" />
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
  const { ref } = query
  const resp = await fetchRelative(`/api/get-categoria?ref=${ref}`);
  const users = await resp.json();
  const respDos = await fetchRelative(`/api/get-categorias`);
  const usersDos = await respDos.json();
  return {users, usersDos}
}

export default EditEntryPage;