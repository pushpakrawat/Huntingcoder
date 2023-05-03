import Navbar from 'huntingcoder/components/Navbar'
import 'huntingcoder/styles/globals.css'



export default function App({ Component, pageProps }) {
  return <>
    <div className="container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </>
}
