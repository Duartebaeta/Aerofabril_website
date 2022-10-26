import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Aero_equipment.module.css'

const SLIDE_COUNT = 23;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const desc = ["Ambulift 4 M 6 C", "Ambulift 6 M 12 C", "Escada Universal Motorizada c/ Canópia", "Escada Universal Motorizada s/ Canópia", "Escada de Passageiros Rebocável", "Escada de Manutenção Rebocável", "Escadote de Serviço", "Plataforma de Manutenção com Elevação", "Carro de Limpeza de Lavabos", "Carro de Água Potável", "Tapete Transportador Motorizado", "Tapete Transportador Rebocável", "Carro de Transporte de Rodas de Avião e Ferramentas", "Carros de Cilindros de azoto alta e baixa pressão", "Pallet Dolly", "Container Dolly", "Carros para Transporte de Bagagem", "Túnel para Embarque / Desembarque de Passageiros de Avião", "Carro de Abastecimento de Skydrol e Mobil Jet II"]

function Aero_equipment() {
  return (
	<div className={styles.aero_container}>
    {slides.map((index) => (
			<div className={styles.aero_box} key={index}>
				<div className={styles.aero_img}>
					<Link href={'#'}><Image src={"/static/equipment_300x300/" + index + ".jpg"} alt="equipment pictures" width={300} height={300} layout="intrinsic"/></Link>
				</div>
				<p className={styles.aero_desc}>{desc[index]}</p>
			</div>
			))}
    </div>
  )
}

export default Aero_equipment