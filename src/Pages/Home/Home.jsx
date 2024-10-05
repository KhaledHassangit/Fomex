import React from 'react'
import Navbar from '../../utilities/Navbar'
import Hero from '../../components/Hero/Hero'
import { Row } from 'react-bootstrap'

const Home = () => {
    return (
        <section className='home'>
                <Navbar />
                <Hero />

        </section>
    )
}

export default Home
