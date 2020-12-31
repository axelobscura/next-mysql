import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'
import Footer from '@/components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
