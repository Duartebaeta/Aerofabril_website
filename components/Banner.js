import styles from "../styles/Banner.module.css"
import Image from "next/image"

const IMAGE_URL = '/static/banner/aerofabril.jpeg';

function Banner() {
	return (
		<div className={styles.heroWrapper}>
			<div className={styles.imageWrapper}>
				<Image
				priority
				src={IMAGE_URL}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="hero image example"
				/>
			</div>
			<div className={styles.heroContent}>
			</div>
		</div>
	);
};

export default Banner