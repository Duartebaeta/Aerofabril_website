import Image from "next/image";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from '../../styles/equipamento.module.css'
import { useRouter } from "next/router";
import {en, pt} from '../../translations'

const CELL_COUNT = 23;
const cells = Array.from(Array(CELL_COUNT).keys());

export default function Equipment({ id }) {
	const router = useRouter();
	const { locale } = router;
	const content = locale === 'en' ? en : pt;
	return (
		<>
		<Navbar />
		<section className={styles.container}>
			<div className={styles.title_container}>
				<Image src={`/static/icons/back-arrow.svg`} width={24} height={24} onClick={() => window !== 'undefined' ? window.location.pathname = "/equipamentos" : null}/>
				<div className={styles.title}>{content[id].title}</div>
			</div>
			<div className={styles.content}>
				<div className={styles.img_container}>
					<Image src={content[id].img_url} width={600} height={450} layout="responsive" alt="test"/>
				</div>
				<div className={styles.desc}>
				{ [...Array(content[id].n_desc)].map((_, i) =><p key={i}><span>-{'>'}</span>{content[id].desc[i]}</p>) }
				</div>
			</div>
		</section>
		<Footer />
		</>
	);
}

export function getStaticProps({ params }) {
	return {
		props: {
			id : params.equipamentoId
		}
	}
}

export async function getStaticPaths({ locales }) {
	const paths = cells.map((index) => locales.map((locale) => ({
			params: { equipamentoId: Object.values(en)[index].url },
			locale
		})))
		.flat()
		return { paths, fallback: false }
}