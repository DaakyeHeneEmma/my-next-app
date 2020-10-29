import Header from './components/headers/header';
import Layout from "./components/layout/layout"
// import Header from './components/headers/header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
 <Layout children />
 <Component {...pageProps} />

    </div>

 )
  
}

export default MyApp
