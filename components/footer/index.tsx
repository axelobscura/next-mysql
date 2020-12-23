import PoweredByVercel from '../powered-by-vercel'

function Footer({ estilo }) {
  return (
    <footer className={`container mx-auto fixed bottom-0 right-0 left-0 flex flex-column justify-center items-center h-20 elfooter ${estilo}`}>
      <p>axosar@gmail.com</p>
      <p>®2004 - 2021 APP DEVELOPMENT FROM AXEL LAURENT OBSCURA SARZOTTI - TODOS LOS DERECHOS RESERVADOS.</p>
    </footer>
  )
}

export default Footer
