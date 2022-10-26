import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import { motion, transform } from "framer-motion";
import { useState } from "react";
import Link from "next/link"

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
		<nav className={styles.navbar}>
			<div className={styles.image_wrapper}>
				<Link href={'/'}><Image src={`/static/header/logo_novo.png`} alt="Logo" className="logo-img" width="300" height="150"/></Link>
			</div>
			<section className={styles.hotlinks_container}>
				<ul className={styles.hotlinks_list}>
					<li>Sobre Nós</li>
					<li>Equipamentos</li>
					<li>Clientes</li>
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
			<li><Link href="/about">Sobre Nós</Link></li>
			<li><Link href="/equipamentos">Equipamentos</Link></li>
			<li><Link href="/clientes">Clientes</Link></li>
		</motion.ul>
		</>
	 );
}
 
export default Navbar;
