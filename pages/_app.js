import '@styles/globals.css'
import { Navbar, Footer } from '@components/ui/common'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

export default MyApp
