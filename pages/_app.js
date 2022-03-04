import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import "@styles/globals.css"
import { Navbar, Footer } from "@components/ui/common"
import { Web3Provider } from "@components/providers"

function MyApp({ Component, pageProps }) {
  return(
    <Web3Provider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer theme="dark" />
    </Web3Provider>
  ) 
}

export default MyApp
