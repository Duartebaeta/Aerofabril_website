import React from 'react'
import style from '../styles/Gruas.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {en_gruas, pt_gruas} from '../translations'

function Gruas() {
	const router = useRouter();
	const { locale } = router;
	const info = locale === 'en' ? en_gruas : pt_gruas;
	return (
	<section className={style.container}>
		<div className={style.first_container}>
			<div className={style.img_container}>
				<Image src={`/static/gruas/1.jpg`} alt="grua" width={675} height={481} layout="responsive"/>
			</div>
			<div className={style.grua_desc}>
					<p className={style.title}>{info[0].title}</p>
					<div className={style.desc}>
						<p><span>-{'>'}</span>{info[0].desc[0]}</p>
						<p><span>-{'>'}</span>{info[0].desc[1]}</p>
						<p><span>-{'>'}</span>{info[0].desc[2]}</p>
					</div>
			</div>
		</div>
		<div className={style.scnd_container}>
			<div className={style.grua_desc}>
					<p className={style.title}>{info[1].title}</p>
					<div className={style.desc}>
						<p><span>-{'>'}</span>{info[1].desc[0]}</p>
						<p><span>-{'>'}</span>{info[1].desc[1]}</p>
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