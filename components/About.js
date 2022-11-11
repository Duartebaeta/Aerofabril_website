import React from 'react'
import styles from '../styles/About.module.css'

function About() {
  return (
	<>
	<p id='about' className={styles.invis_anchor}></p>
	<div className={styles.about_container} id="about">
		<h3>Sobre Nós</h3>
		<p>A Aerofabril - Indústria de Equipamentos Aeroportuários Lda., é uma empresa especializada no fabrico e comercialização de equipamentos aeroportuários.<br></br><br></br>A empresa exerce a sua atividade em instalações industriais de dimensão considerável, cerca de 5.000 metros quadrados de área coberta, com parque de máquinas adequado, tendo condições de executar quaisquer trabalhos na área de metalúrgica e metalomecânica.<br></br><br></br>O pessoal que compõe os nossos quadros detém o “know how” para a fabricação e assistência de todo o tipo de equipamento aeroportuário, quer material de pista quer de manutenção, o que nos permite assegurar o fabrico deste tipo de equipamentos, na certeza de que a sua comercialização leva aos clientes equipamentos com superior qualidade técnica, prestando posteriormente os serviços de manutenção adequados.<br></br>A Empresa está também preparada para desenvolver a nossa atividade no fabrico e correspondente montagem na área metalomecânica, nomeadamente estruturas metálicas de pequena ou grande dimensão, silos, depósitos, transportadores, e outros, em cuja atividade o seu quadro de pessoal possui uma larga experiência (mais de 30 anos).<br></br><br></br>Para além do fabrico do equipamento mencionado, A Empresa desenvolve ainda atividade na construção de gruas, pórticos e plataformas hidráulicas para serviços portuários garantindo a manutenção e conservação dos equipamentos com equipas de pessoal especializado para o efeito. A dimensão das instalações fabris, permite à Empresa dispor das condições ideais para o fabrico de quaisquer tipos de estruturas metálicas, incluindo as utilizadas para painéis publicitários.<br></br><br></br>A experiência da empresa, aliada a exigência de qualidade que impõe no fabrico dos bens que produz, nomeadamente com recurso regular à certificação dos equipamentos, permite-lhe oferecer uma qualidade de nível superior, primando pelo total cumprimento dos prazos de entrega estabelecidos contratualmente.</p>
	</div>
	</>
  )
}

export default About