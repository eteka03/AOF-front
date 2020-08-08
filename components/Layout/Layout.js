import Link from 'next/link'
import Head from 'next/head'
import NavBar from '../NavBar/NavBar'
import  styles from './Layout.module.scss'
import Footer from '../Footer/Footer'

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <div className={` ${styles.layout} `} >

        
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        

            <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png"/>
<link rel="manifest" href="/images/icons/site.webmanifest"/>
<link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#5bbad5"/>
<link rel="shortcut icon" href="/images/icons/favicon.ico"/>
<meta name="msapplication-TileColor" content="#da532c"></meta>
<meta name="msapplication-config" content="/images/icons/browserconfig.xml"></meta>
<meta name="theme-color" content="#ffffff"></meta>
        </Head>

        <header>
        <NavBar />
        </header>

            <main className="site-content">
            {children}
            </main>
        
     
      

      <footer className="site-footer">
          <Footer />
      </footer>

      <style  jsx>
        {`
          html{
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  )
}