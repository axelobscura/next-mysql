import Head from 'next/head'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

function Layout({ children, home }) {
    let estilo = {};
    if(home === "home"){
        estilo = {
            background: 'url(fondo_avion.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
            height: '100vh',
        }
    } else {
        estilo = {
            background: 'url(fondo_isla.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
            height: '100vh'
        }
    }
    return (
        <div>
            <Head>
                <title>AXEL LAURENT OBSCURA SARZOTTI - FULL STACK DEVELOPER</title>
                <link rel="icon" type="image/png" href="favicon.png" />
                <meta name="description" content="Full Stack developer in México, over 17 years of experience developing all kind of platforms and applications." />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400;700&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"></link>
            </Head>
            <main style={estilo}>{children}</main>
        </div>
    )
}

export default Layout;