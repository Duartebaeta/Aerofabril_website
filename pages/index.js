import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Carrousel from '../components/Carrousel'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Carrousel />
      <About />
      <Footer />
    </>
  )
}
