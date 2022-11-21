import React from 'react'
import styles from '../styles/About.module.css'
import {useRouter} from 'next/router'

function pt() {
	return (
		<p>A Aerofabril - Indústria de Equipamentos Aeroportuários Lda., é uma empresa especializada no fabrico e comercialização de equipamentos aeroportuários.<br></br><br></br>A empresa exerce a sua atividade em instalações industriais de dimensão considerável, cerca de 5.000 metros quadrados de área coberta, com parque de máquinas adequado, tendo condições de executar quaisquer trabalhos na área de metalúrgica e metalomecânica.<br></br><br></br>O pessoal que compõe os nossos quadros detém o “know how” para a fabricação e assistência de todo o tipo de equipamento aeroportuário, quer material de pista quer de manutenção, o que nos permite assegurar o fabrico deste tipo de equipamentos, na certeza de que a sua comercialização leva aos clientes equipamentos com superior qualidade técnica, prestando posteriormente os serviços de manutenção adequados.<br></br>A Empresa está também preparada para desenvolver a nossa atividade no fabrico e correspondente montagem na área metalomecânica, nomeadamente estruturas metálicas de pequena ou grande dimensão, silos, depósitos, transportadores, e outros, em cuja atividade o seu quadro de pessoal possui uma larga experiência (mais de 30 anos).<br></br><br></br>Para além do fabrico do equipamento mencionado, A Empresa desenvolve ainda atividade na construção de gruas, pórticos e plataformas hidráulicas para serviços portuários garantindo a manutenção e conservação dos equipamentos com equipas de pessoal especializado para o efeito. A dimensão das instalações fabris, permite à Empresa dispor das condições ideais para o fabrico de quaisquer tipos de estruturas metálicas, incluindo as utilizadas para painéis publicitários.<br></br><br></br>A experiência da empresa, aliada a exigência de qualidade que impõe no fabrico dos bens que produz, nomeadamente com recurso regular à certificação dos equipamentos, permite-lhe oferecer uma qualidade de nível superior, primando pelo total cumprimento dos prazos de entrega estabelecidos contratualmente.</p>
	)
}

function en() {
	return (
		<p>Aerofabril - Airport Industrial Equipment Ltd., is specialized in the construction and commercialization of airport equipments.<br></br><br></br>The Company is engaged in industrial plants of considerable size, about 5,000 square meters of covered area, with adequate number of machines, and capable of executing any work in the field of metallurgy and metal.<br></br><br></br>The personnel that make up our staff have the know-how to manufacture and service all types of airport, runway and maintenance equipment, which allows us to ensure the manufacture of such equipment, in the certainty that we provide our customers with superior technical quality, and after the appropriate maintenance services.<br></br>The Company is also prepared to develop it´s activity in the assembly and construction of metal structures, small or large, silos, warehouses, carriers, and others, which our staff has extensive experience (about 30 years).<br></br><br></br>Besides the manufacture of the mentioned equipment, our company also develops activity in the construction of cranes, hydraulic gantries and platforms for port services.We ensure the maintenance and preservation of equipment, with staff specialized for this purpose. The dimension of our facilities allows us to have the best possible conditions for the assembly of any type of metal structures, including those used for billboards. Our experience, combined with the high standards of quality we demand with regular product certification allows us to offer superior quality and the total fulfillment of the delivery deadlines set contractually.</p>
	)
}

function About() {
	const router = useRouter();
	const { locale } = router;
	return (
	<>
	<p id='about' className={styles.invis_anchor}></p>
	<div className={styles.about_container} id="about">
		<h3>{locale === 'en' ? "About Us" : "Sobre Nós"}</h3>
		{locale === 'en' ? en() : pt()}
	</div>
	</>
  )
}

export default About