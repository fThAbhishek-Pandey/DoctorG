import React from 'react'
import Header from '../components/Header'
import SpeciallityMenu from '../components/SpeciallityMenu'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/banner'
const Home = () => {
  return (
    <div>Homepage
      <Header />
      <SpeciallityMenu/>
      <TopDoctor />
      <Banner/>
    </div>
    
  )
}

export default Home