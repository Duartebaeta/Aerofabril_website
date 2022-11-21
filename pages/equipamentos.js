import React from 'react'
import Clientes from '../components/Clientes'
import Equipamentos from '../components/Equipamentos'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'

function equipamentos() {
	const router = useRouter();
	const { locale } = router;
  return (
	<>
	<Navbar />
	<div className='equipamentos_title'>
		<span>{locale === 'en' ? "Our equipments" : "Os nossos equipamentos"}</span>
	</div>
	<Equipamentos />
	<Clientes />
	<Footer />
	</>
  )
}

export default equipamentos