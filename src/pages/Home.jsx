import React from 'react'
import NavPortfolio from '../components/NavPortfolio'
import FooterPortfolio from '../components/FooterPortfolio'
import CardHomeProfile from '../components/CardHomeProfile'
import CardHomeAboutMe from '../components/CardHomeAboutMe'

import CarouselHomeProjects from '../components/CarouselHomeProjects'

function Home() {
  return (
    <div>
        <nav>
        <NavPortfolio/>
        </nav>
        
        <main >
        <CardHomeProfile /> 
        <CardHomeAboutMe />
        <CarouselHomeProjects/>
    </main>
        <footer>
           <FooterPortfolio/> 
        </footer>
    </div>
  )
}

export default Home
