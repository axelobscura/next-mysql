import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'
import Footer from '@/components/footer'
import api from './api/get-categorias';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
