import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Map from './Map'
import {useRouter} from 'next/router'

function Footer() {
	const router = useRouter();
	const { locale } = router;

	const handleEnToggle = () => {
		switch(locale) {
			case "en":
				break;
			case "pt":
				router.push(typeof(window) !== 'undefined' ? window.location.pathname : "/", "/", { locale: "en" });
				break;
		}
	}
	const handlePtToggle = () => {
		switch(locale) {
			case "en":
				router.push(typeof(window) !== 'undefined' ? window.location.pathname : "/", "/", { locale: "pt" });
				break;
			case "pt":
				break;
		}
	}

  return (
	<div className={styles.footer}>
		<div className={styles.top_row}>
			<h3 className={styles.footer_title}>{locale === 'en' ? "Contacts" : "Contactos"}</h3>
			<div>
				<Image src={`/static/icons/pt.svg`} width={32} height={32} onClick={handlePtToggle}/>
				<Image src={`/static/icons/uk.svg`} width={32} height={32} onClick={handleEnToggle}/>
			</div>
		</div>
		<div className={styles.footer_content}>
			<div className={styles.footer_info}>
				<div className={styles.footer_info_1}>
					<div className={styles.info_box}>
						<h5>{locale === 'en' ? "General" : "Geral"}</h5>
						<p className={styles.info_text}><Link href={'#'}>aerofabril@aerofabril.pt</Link></p>
					</div>
					<div className={styles.info_box}>
						<h5>{locale === 'en' ? "Management" : "Gerência"}</h5>
						<p className={styles.info_text}>Fernando Baeta - <Link href={'#'}>fernandobaeta@aerofabril.pt</Link><br></br>Carlos Silva Reis - <Link href={'#'}>carlosreis@aerofabril.pt</Link></p>
					</div>
					<div className={styles.info_box}>
						<h5>{locale === 'en' ? "Financial Department" : "Departamento Financeira"}</h5>
						<p className={styles.info_text}>Antónia Marques - <Link href={'#'}>antoniamarques@aerofabril.pt</Link></p>
					</div>
					<div className={styles.info_box}>
						<h5>{locale === 'en' ? "Purchasing department" : "Departamento Compras"}</h5>
						<p className={styles.info_text}>Ana Lúcia Santos - <Link href={'#'}>anasantos@aerofabril.pt</Link></p>
					</div>
				</div>
				<div className={styles.footer_info_2}>
					<div className={styles.info_box}>
						<h5>{locale === 'en' ? "Technical and Commercial Department" : "Departamento Técnico e Comercial"}</h5>
						<p className={styles.info_text}>Carlos Medeiros - <Link href={'#'}>carlosmedeiros@aerofabril.pt</Link></p>
					</div>
					<div className={styles.footer_spec_info}>
						<div className={styles.footer_spec_box}>
							<Image src={`/static/icons/telephone.png`} alt="icon" width={29} height={29}/>
							<p>+351 214 782 420</p>
						</div>
						<div className={styles.footer_spec_box}>
							<Image src={`/static/icons/house.png`} alt="icon" width={29} height={29}/>
							<p> Rua Ribeira do Troca, Parque Aerofabril – 1675-086 - PONTINHA</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer_map}>
				<Map />
			</div>
		</div>
	</div>
  )
}

export default Footer