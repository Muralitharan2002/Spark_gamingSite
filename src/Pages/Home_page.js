import React, { lazy, Suspense } from 'react';
import Header from '../Components/Header';

// Lazy load the remaining components
const Home = lazy(() => import('../Components/Home'));
const Collections = lazy(() => import('../Components/Collections'));
const Story = lazy(() => import('../Components/Story'));
const ClientMoto = lazy(() => import('../Components/ClientMoto'));
const NewRelease = lazy(() => import('../Components/NewRelease'));
const Promo = lazy(() => import('../Components/Promo'));
const News = lazy(() => import('../Components/News'));
const Footer = lazy(() => import('../Components/Footer'));

function Home_page() {
    return (
        <div className='text-stone-300'>

            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
        </div>
    );
}

export default Home_page;
