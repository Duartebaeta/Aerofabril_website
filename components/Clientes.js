import React from 'react'
import style from '../styles/Clientes.module.css'

function Clientes() {
  return (
	<>
	<p className={style.invis_anchor} id="clientes"></p>
	<div className={style.container}>
		<span className={style.clientes_title}>Os nossos clientes</span>
		<section className={style.clientes_container}>
			<div className={style.clientes_aero}>
				<span className={style.container_title}>Aeroportuários</span>
				<ul className={style.aero_container}>
					<li><span>-{'>'}</span>Sata Air Açores, SA</li>
					<li><span>-{'>'}</span>Sata Internacional</li>
					<li><span>-{'>'}</span>Ground Force Portugal</li>
					<li><span>-{'>'}</span>Tap Portugal, SA</li>
					<li><span>-{'>'}</span>Portway – Handling de Portugal, SA</li>
					<li><span>-{'>'}</span>Aeromec – Mecânica de Aeronaves</li>
					<li><span>-{'>'}</span>Força Aérea Portuguesa</li>
					<li><span>-{'>'}</span>Ogma – Oficinas Gerais de Material Aeronáutico</li>
					<li><span>-{'>'}</span>Ogma – Oficinas Gerais de Material Aeronáutico</li>
					<li><span>-{'>'}</span>Ghassist Sarl</li>
					<li><span>-{'>'}</span>Globalia Handling S.A.U.</li>
					<li><span>-{'>'}</span>Euroatlantic – Airway Transportes Aéreos SA</li>
					<li><span>-{'>'}</span>Halcyonair Airways</li>
					<li><span>-{'>'}</span>Iberworld Airlines, SA</li>
					<li><span>-{'>'}</span>Climex, SA</li>
					<li><span>-{'>'}</span>ISS Facility Services</li>
				</ul>
			</div>
			<div className={style.other_container}>
				<div className={style.portuario_container}>
					<span className={style.container_title}>Portuários</span>
					<ul className={style.port_content}>
						<li><span>-{'>'}</span>Docapesca – Portos e Lotas, SA</li>
						<li><span>-{'>'}</span>Lotaçor – Serviço de Lotas DOS Açores, SA</li>
						<li><span>-{'>'}</span>Açorline – Transportes Marítimos, SA</li>
						<li><span>-{'>'}</span>Porto Santo Line</li>
						<li><span>-{'>'}</span>Santos Barosa</li>
						<li><span>-{'>'}</span>APRAM – Administração dos Portos da Região Autónoma da Madeira, SA</li>
						<li><span>-{'>'}</span>Docapesca – Portos e Lotas, SA</li>
					</ul>
				</div>
				<div className={style.paineis_container}>
					<span className={style.container_title}>Paineis Publicitários</span>
					<ul className={style.paineis_content}>
						<li><span>-{'>'}</span>Espacimark Publicidade e Marketing, Lda</li>
						<li><span>-{'>'}</span>Edicais – Publicidade Exterior Lda</li>
						<li><span>-{'>'}</span>Projecto 3, Lda</li>
						<li><span>-{'>'}</span>Printdesk, Lda</li>
						<li><span>-{'>'}</span>Terbi – Instalações e Montagens Publicitária, Lda</li>
						<li><span>-{'>'}</span>It’s ready – Projectos de Imagem SA</li>
						<li><span>-{'>'}</span>Espaço Exterior, Lda</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
	</>
  )
}

export default Clientes