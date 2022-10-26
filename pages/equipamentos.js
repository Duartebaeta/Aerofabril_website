import React from 'react'
import Clientes from '../components/Clientes'
import Equipamentos from '../components/Equipamentos'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function equipamentos() {
  return (
	<>
	<Navbar />
	<div className='equipamentos_title'>
		<span>Os nossos equipamentos</span>
	</div>
	<Equipamentos />
	<Clientes />
	<Footer />
	</>
  )
}

export default equipamentos