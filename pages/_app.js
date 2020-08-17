// import App from 'next/app'
import Layout from '../components/Layout/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';

import '../pages/styles/globalstyle.scss'

import moduleName from '../pages/styles/mediaqueries.css'


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