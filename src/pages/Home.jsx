import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Menus from '../components/menus/Menus'
import Order from '../components/order/Order'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material'

function Home() {
  return (
    <Box sx={{position: 'relative'}}>
    
    <Hero/>
    <About/>
    <Menus/>
    <Order/>
    <Footer/>

    </Box>
  )
}

export default Home