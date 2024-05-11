import React from 'react'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Collections from '../Components/Collections'
import Story from '../Components/Story'
import ClientMoto from '../Components/ClientMoto'
import NewRelease from '../Components/NewRelease'
import Promo from '../Components/Promo'
import News from '../Components/News'
import Footer from '../Components/Footer'

function Home_page() {

    return (
        <div className='  text-stone-300'>
            <Header />
            <div className="text-stone-300 bg-home bg-cover lg:bg-right md:bg-right bg-center">

                <Home />

            </div>
            <Collections />
            <Story />
            <ClientMoto />
            <NewRelease />
            <Promo />
            <News />
            <Footer />

        </div>
    )
}

export default Home_page