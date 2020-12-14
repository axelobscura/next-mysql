import Head from 'next/head'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

function Layout({ children, home }) {
    let imagen = "";
    if(home === "home"){
        imagen = "fondo_avion.jpg"
    } else {
        imagen = "fondo_isla.jpg"
    }
    return (
        <div>
            <Head>
                <title>AXEL OBSCURA SARZOTTI - FULL STACK DEVELOPER</title>
                <link rel="icon" type="image/png" href="favicon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;400;700&display=swap" rel="stylesheet"></link>
                <meta name="description" content="Full Stack developer in México, over 17 years of experience developing all kind of platforms and applications." />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main style={{
                background: 'url('+imagen+') no-repeat center center fixed',
                backgroundSize: 'cover'
            }}>{children}</main>
        </div>
    )
}

export default Layout;