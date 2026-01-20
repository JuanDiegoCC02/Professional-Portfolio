import React from 'react'
import NavPortfolio from '../components/NavPortfolio'
import FooterPortfolio from '../components/FooterPortfolio'
import CardHomeProfile from '../components/CardHomeProfile'
import CardHomeAboutMe from '../components/CardHomeAboutMe'

import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
        <nav>
        <NavPortfolio/>
        </nav>
        
        <div className="home-container">
      {/* 1. Card Perfil: Aparece de inmediato al cargar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <CardHomeProfile /> 
      </motion.div>
         <motion.div 
        initial={{ opacity: 0, y: 50 }} // Empieza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Se mueve a su posición original al verlo
        viewport={{ once: false, amount: 0.2 }} // Se activa cuando se ve el 20% del componente
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CardHomeAboutMe />
      </motion.div>
    </div>
        <footer>
           <FooterPortfolio/> 
        </footer>
    </div>
  )
}

export default Home
