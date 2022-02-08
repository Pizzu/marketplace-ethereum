import '@styles/globals.css'
import { Navbar, Footer } from '@components/ui/common'
import { Web3Provider } from '@components/providers'

function MyApp({ Component, pageProps }) {
  return(
    <Web3Provider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Web3Provider>
  ) 
}

export default MyApp
