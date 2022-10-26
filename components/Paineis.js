import React from 'react'
import style from '../styles/Paineis.module.css'
import Image from 'next/image'

const panelCount = 6;
const panels = Array.from(Array(panelCount).keys());
const desc = [["Painel Publicitário Rotativo", "Com quatro faces de 8x6 metros", "Coluna de 12 metros"], ["Painel Publicitário Fixo", "Com dupla face, tendo cada face 11x5 metros", "Coluna de 12 metros"], ["Painel Publicitário Fixo", "Com tripla face (triangular), tendo cada face 11 x 5 metros", "Coluna de 24 metros"], ["Painel Publicitário Cafés Delta"], ["Painel Publicitário Fixo", "Com tripla face (triangular), tendo cada face 11x5 metros", "Coluna de 24 metros"], ["Painel Publicitário Fixo, com publicidade rotativa", "Dupla Face, tendo cada face 20 x 6 metros", "Duas colunas com 12 metros"]]

function Paineis() {
	return (
		<>
			<section className={style.container}>
			{panels.map((index) => (
				<div className={style.painel} key={index}>
					<div className={style.img_container}>
						<Image src={'/static/paineis/' + (index + 1) + '_md.jpg'} alt="painel" width={320} height={320} layout=""/>
					</div>
					<div className={style.desc}>
					{ [...Array(desc[index].length)].map((_, i) =><p key={i}><span>-{'>'}</span>{desc[index][i]}</p>) }
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