import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import Hero from "./hero/Hero"
import Testimonal from "./testimonal/Faculties"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Testimonal />
      <Hblog />
    </>
  )
}

export default Home
