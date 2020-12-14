import Head from 'next/head'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
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
            {home ? "SI ES EL HOME" : "NO ES EL HOME"}
            <main>{children}</main>
        </div>
    )
}