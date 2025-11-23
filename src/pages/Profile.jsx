import React from 'react'
import FooterPortfolio from '../components/FooterPortfolio'
import NavPortfolio from '../components/NavPortfolio'
import CardProfileMyInfo from '../components/CardProfileMyInfo'

function Profile() {
  return (
    <div>
        <nav>
          <NavPortfolio/>
        </nav>
        <main>
        <CardProfileMyInfo/>
        </main>
        <footer>
            <FooterPortfolio/>
        </footer>
    </div>
  )
}

export default Profile