import React from 'react'
import { useState } from 'react';
import styles from '../styles/Equipamentos.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Aero_equipment from './Aero_equipment';
import Gruas from './Gruas';
import Paineis from './Paineis';

function Equipamentos() {
  const [showAero, setAero] = React.useState(true);
  const [showGruas, setGruas] = React.useState(false);
  const [showPaineis, setPaineis] = React.useState(false);
  function handleAero() {
    setAero(true);
    setGruas(false);
    setPaineis(false);
  }
  function handleGruas() {
    setAero(false);
    setGruas(true);
    setPaineis(false);
  }
  function handlePaineis() {
    setAero(false);
    setGruas(false);
    setPaineis(true);
  }
  return (
	<>
    <div className={styles.selector_container}>
      <div className={showAero ? styles.active : styles.inactive} onClick={() => handleAero()}>
        <p>Material Aeroportuário</p>
      </div>
      <div className={showGruas ? styles.active : styles.inactive} onClick={() => handleGruas()}>
        <p>Gruas Hidráulicas</p>
      </div>
      <div className={showPaineis ? styles.active : styles.inactive} onClick={() => handlePaineis()}>
        <p>Painéis Publicitários</p>
      </div>
    </div>
    { showAero ? <Aero_equipment /> : null }
    { showGruas ? <Gruas /> : null }
    { showPaineis ? <Paineis /> : null }
  </>
  )
}

export default Equipamentos