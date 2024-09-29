import React from 'react'
import Header from '../components/home/Header'
import SpeciallityMenu from '../components/home/SpeciallityMenu'
import TopDoctor from '../components/home/TopDoctor'
import Banner from '../components/home/banner'
const Home = () => {
  return (
    <div>
      <Header />
      <SpeciallityMenu/>
      <TopDoctor />
      <Banner/>
    </div>
    
  )
}

export default Home