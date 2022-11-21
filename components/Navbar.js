import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { motion, transform } from "framer-motion";
import { useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const { locale } = router;

	const [isOpen, setOpen] = useState(false);
	return (
		<>
		<nav className={styles.navbar}>
			<div className={styles.image_wrapper}>
				<Link href={'/'}><a><Image src={`/static/header/logo_novo.png`} alt="Logo" className="logo-img" width="300" height="150"/></a></Link>
			</div>
			<section className={styles.hotlinks_container}>
				<ul className={styles.hotlinks_list}>
					<Link href={'/#about'}><li>{locale === 'en' ? "About us" : "Sobre Nós"}</li></Link>
					<Link href={'/equipamentos'}><li>{locale === 'en' ? "Equipment" : "Equipamentos"}</li></Link>
					<Link href={'/equipamentos/#clientes'}><li>{locale === 'en' ? "Clients" : "Clientes"}</li></Link>
				</ul>
				<div className={styles.hamb}>
					<motion.ul className={styles.hamb_btn}
					onClick={() => setOpen(!isOpen)}
					>
						<motion.li className={styles.top}
						initial={false}
						animate={isOpen ? "open" : "closed"}
						variants={{
							open: {
								rotate: 45,
								y: "11px",
							},
							closed: {rotate: 0}
						}}
						transition={{ duration: .4, type: "tween" }}
						></motion.li>
						<motion.li className={styles.middle}
						initial={false}
						animate={isOpen ? "open" : "closed"}
						variants={{
							open: {
								x: 45,
								opacity: 0,
							},
							closed: {rotate: 0}
						}}
						transition={{ duration: .4, type: "tween" }}
						></motion.li>
						<motion.li className={styles.bottom}
						initial={false}
						animate={isOpen ? "open" : "closed"}
						variants={{
							open: {
								rotate: -45,
								y: "-11px",
							},
							closed: {rotate: 0}
						}}
						transition={{ duration: .4, type: "tween" }}
						></motion.li>
					</motion.ul>
				</div>
			</section>
		</nav>
		<motion.ul className={[styles.hamb_menu]}
		initial={false}
		animate={isOpen ? "open" : "closed"}
		variants= {{
			open: {
				transform: "translateY(0%)",
			},
			closed: {
				transform: "translateY(-100%)",
				
			}
		}}
		transition={{ duration: .4, type: "tween" }}
		>
			<Link href={'/#about'}>{locale === 'en' ? "About us" : "Sobre Nós"}</Link>
			<Link href={'/equipamentos'}>{locale === 'en' ? "Equipment" : "Equipamentos"}</Link>
			<Link href={'/equipamentos/#clientes'}>{locale === 'en' ? "CLients" : "Clientes"}</Link>
		</motion.ul>
		</>
	 );
}
 
export default Navbar;
