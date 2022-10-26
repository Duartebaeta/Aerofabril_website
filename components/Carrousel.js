import React from 'react'
import styles from '../styles/Carrousel.module.css'
import Link from 'next/link'
import EmblaCarousel from './Slider';

const SLIDE_COUNT = 23;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Carrousel() {
  return (
	<div className={styles.car_container}>
		<div className={styles.car_title}>
			<h3>Equipamentos e Clientes</h3>
			<p className={styles.small_text}>Conheça alguns dos nossos equipamentos e <Link href={'/clientes'}>Clientes-&gt;</Link></p>
		</div>
		<EmblaCarousel slides={slides}/>
		<Link href={'/equipamentos'}><button className={styles.nav_button}>Equipamentos-&gt;</button></Link>
	</div>
  )
}

export default Carrousel