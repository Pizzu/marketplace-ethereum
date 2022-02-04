import '@styles/globals.css'
import { Navbar } from '@components/ui/common'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
