import React from 'react'
import style from '../styles/Paineis.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { en_paineis, pt_paineis } from '../translations';

const panelCount = 6;
const panels = Array.from(Array(panelCount).keys());

function Paineis() {
	const router = useRouter();
	const { locale } = router;
	const info = locale === 'en' ? en_paineis : pt_paineis;
	return (
		<>
			<section className={style.container}>
			{panels.map((index) => (
				<div className={style.painel} key={index}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + (index + 1) + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
					{ [...Array(info[index].desc.length)].map((_, i) =><p key={i}><span>-{'>'}</span>{info[index].desc[i]}</p>) }
					</div>
				</div>
			))}
			</section>
		</>
	)
}

export default Paineis

{/* <div className={style.painel}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + 1 + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
					<p><span>-{'>'}</span></p>
					<p><span>-{'>'}</span></p>
					<p><span>-{'>'}</span></p>
					</div>
				</div>
				<div className={style.painel}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + 2 + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
					</div>
				</div>
				<div className={style.painel}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + 3 + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
					</div>
				</div>
				<div className={style.painel}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + 4 + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
						<p><span>-{'>'}</span></p>
					</div>
				</div>
				<div className={style.painel}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + 5 + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
					</div>
				</div>
				<div className={style.painel}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + 6 + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
						<p><span>-{'>'}</span></p>
					</div>
				</div> */}