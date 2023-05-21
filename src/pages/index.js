import Head from 'next/head'
import Navbar from '@/Components/Navbar'
import Products from '@/Components/Products'
import Footer from '@/Components/Footer'
import Locations from '@/Components/Locations'
import Main from '@/Components/Main'
import Learn from '@/Components/Learn'
import Script from 'next/script'
export default function Home() {
  return (
    <>
      <Head>


      </Head>
      <main >
        <Navbar />
        <section id="home">
        <Main />
      </section>
        <section id="products">
        <Products />
      </section>
    <section id="aboutus">
        <Learn />
      </section>
        <section id="location">
        <Locations />
      </section>
        <section id="contactus">
        <Footer />
      </section>

      </main>
    </>
  )
}
