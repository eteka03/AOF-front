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