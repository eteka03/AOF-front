// import App from 'next/app'

import Layout from '../components/Layout/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/styles/mediaqueries.css'
import '../pages/styles/globalstyle.scss'

import  '@fortawesome/fontawesome-svg-core/styles.css'
import {faMap, faPhoneAlt, faLink, faEnvelope, faWheelchair, faParking, faPersonBooth, faCar } from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {config,library} from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faMap,faPhoneAlt,faLink,faFacebook,faWhatsapp,faInstagram,faWheelchair,faParking,faCar,faPersonBooth,faEnvelope)

function MyApp({ Component, pageProps }) {


    return(<Layout  title={pageProps.title}>
            <Component {...pageProps} />
    </Layout> )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp