import React from 'react'
import style from '../styles/Gruas.module.css'
import Image from 'next/image'

function Gruas() {
  return (
	<section className={style.container}>
		<div className={style.first_container}>
			<div className={style.img_container}>
				<Image src={`/static/gruas/1.jpg`} alt="grua" width={675} height={481} layout="responsive"/>
			</div>
			<div className={style.grua_desc}>
					<p className={style.title}>Grua Hidráulica Móvel</p>
					<div className={style.desc}>
						<p><span>-{'>'}</span>Gruas hidráulicas para elevação de pescado e outros bens</p>
						<p><span>-{'>'}</span>Capacidade de 500 kgs a 1000 kgs</p>
						<p><span>-{'>'}</span>Tendo capacidade para levantar 1000 kgs com a lança em qualquer posição</p>
					</div>
			</div>
		</div>
		<div className={style.scnd_container}>
			<div className={style.grua_desc}>
					<p className={style.title}>Grua Hidráulica Móvel</p>
					<div className={style.desc}>
						<p><span>-{'>'}</span>Gruas hidráulicas fixas para elevação de pescado e outros bens</p>
						<p><span>-{'>'}</span>Capacidade de 150 kgs, 250 kgs e 500 kgs</p>
					</div>
			</div>
			<div className={style.img_container_t}>
				<Image src={`/static/gruas/2.jpg`} alt="grua" width={489} height={600} layout="responsive"/>
			</div>
		</div>
	</section>
  )
}

export default Gruas