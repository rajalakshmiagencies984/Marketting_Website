import Learn from '@/Components/Learn'
import Slider from '@/Components/Slider'
import Script from 'next/script'
import Navbar from '@/Components/Navbar'
import Products from '@/Components/Products'
import Footer from '@/Components/Footer'
import Locations from '@/Components/Locations'

const Second = ()=>{
    return(
        <>
        <Navbar />
        <section id="home">
            <Slider />
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
        </>
    )
}

export default Second
