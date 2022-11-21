import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Aero_equipment.module.css'
import { useRouter } from 'next/router'
import {en, pt} from '../translations'

const SLIDE_COUNT = 23;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Aero_equipment() {
	const router = useRouter();
	const { locale } = router;
	const info = locale === 'en' ? en : pt;

	return (
	<div className={styles.aero_container}>
    {slides.map((index) => (
			<div className={styles.aero_box} key={index}>
				<div className={styles.aero_img}>
					<Link href={{
						pathname: "/equipamentos/" + info[Object.keys(info)[index]].url
					}}><a><Image src={"/static/equipment_300x300/" + index + ".jpg"} alt="equipment pictures" width={300} height={300} layout="intrinsic"/></a></Link>
				</div>
				<p className={styles.aero_desc}>{info[Object.keys(info)[index]].title}</p>
			</div>
			))}
    </div>
  )
}

export default Aero_equipment