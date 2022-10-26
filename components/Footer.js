import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Map from './Map'

function Footer() {
  return (
	<div className={styles.footer}>
		<h3 className={styles.footer_title}>Contactos</h3>
		<div className={styles.footer_content}>
			<div className={styles.footer_info}>
				<div className={styles.footer_info_1}>
					<div className={styles.info_box}>
						<h5>Geral</h5>
						<p className={styles.info_text}><Link href={'#'}>aerofabril@aerofabril.pt</Link></p>
					</div>
					<div className={styles.info_box}>
						<h5>Gerência</h5>
						<p className={styles.info_text}>Fernando Baeta - <Link href={'#'}>fernandobaeta@aerofabril.pt</Link><br></br>Carlos Silva Reis - <Link href={'#'}>carlosreis@aerofabril.pt</Link></p>
					</div>
					<div className={styles.info_box}>
						<h5>Departamento Financeira</h5>
						<p className={styles.info_text}>Antónia Marques - <Link href={'#'}>antoniamarques@aerofabril.pt</Link></p>
					</div>
					<div className={styles.info_box}>
						<h5>Departamento Compras</h5>
						<p className={styles.info_text}>Ana Lúcia Santos - <Link href={'#'}>anasantos@aerofabril.pt</Link></p>
					</div>
				</div>
				<div className={styles.footer_info_2}>
					<div className={styles.info_box}>
						<h5>Departamento Técnico e Comercial</h5>
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