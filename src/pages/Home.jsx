import React from 'react'
import NavPortfolio from '../components/NavPortfolio'
import FooterPortfolio from '../components/FooterPortfolio'
import CardHomeProfile from '../components/CardHomeProfile'

function Home() {
  return (
    <div>
        <nav>
        <NavPortfolio/>
        </nav>
        <main>
        <CardHomeProfile/>
        </main>
        <footer>
           <FooterPortfolio/> 
        </footer>
    </div>
  )
}

export default Home