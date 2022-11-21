import React from 'react'
import styles from '../styles/Carrousel.module.css'
import Link from 'next/link'
import EmblaCarousel from './Slider';
import { useRouter } from 'next/router';

const SLIDE_COUNT = 23;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Carrousel() {
	const router = useRouter();
	const { locale } = router;
	return (
	<div className={styles.car_container}>
		<div className={styles.car_title}>
			<h3>{locale === 'en' ? "Equipment and Clients" : "Equipamentos e Clientes"}</h3>
			<p className={styles.small_text}>{locale === 'en' ? "Discover some of our equipment and" : "Conheça alguns dos nossos equipamentos e"} <Link href={'/equipamentos#clientes'}>{locale === 'en' ? "Clients" : "Clientes"}</Link><span>-{'>'}</span></p>
		</div>
		<EmblaCarousel slides={slides}/>
		<Link href={'/equipamentos'}><button className={styles.nav_button}>{locale === 'en' ? "Equipment" : "Equipamentos"}<span>-&gt;</span></button></Link>
	</div>
  )
}

export default Carrousel