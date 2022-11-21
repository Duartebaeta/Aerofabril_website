import React from 'react'
import { useState } from 'react';
import styles from '../styles/Equipamentos.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Aero_equipment from './Aero_equipment';
import Gruas from './Gruas';
import Paineis from './Paineis';
import {useRouter} from 'next/router'
import { motion, transform } from "framer-motion";

function Equipamentos() {
  const router = useRouter();
  const { locale } = router;

  const [isOpen, setOpen] = React.useState(false);


  const [showAero, setAero] = React.useState(true);
  const [showGruas, setGruas] = React.useState(false);
  const [showPaineis, setPaineis] = React.useState(false);
  function handleAero() {
    setAero(true);
    setGruas(false);
    setPaineis(false);
    setOpen(false);
  }
  function handleGruas() {
    setAero(false);
    setGruas(true);
    setPaineis(false);
    setOpen(false);
  }
  function handlePaineis() {
    setAero(false);
    setGruas(false);
    setPaineis(true);
    setOpen(false);
  }

  function returnPage() {
      if (showAero)
      {
        return(locale === 'en' ? "Airport Material" : "Material Aeroportuário");
      }
      else if (showGruas) {
        return(locale === 'en' ? "Hydraulic Cranes" : "Gruas Hidráulicas");
      }
      else if (showPaineis){
        return(locale === 'en' ? "Billboards" : "Painéis Publicitários");
      }
  }
  return (
	<>
  <section className={styles.selector_container}>
    <div className={styles.selector_row}>
      <div className={showAero ? styles.active : styles.inactive} onClick={() => handleAero()}>
        <p>{locale === 'en' ? "Airport Material" : "Material Aeroportuário"}</p>
      </div>
      <div className={showGruas ? styles.active : styles.inactive} onClick={() => handleGruas()}>
        <p>{locale === 'en' ? "Hydraulic Cranes" : "Gruas Hidráulicas"}</p>
      </div>
      <div className={showPaineis ? styles.active : styles.inactive} onClick={() => handlePaineis()}>
        <p>{locale === 'en' ? "Billboards" : "Painéis Publicitários"}</p>
      </div>
    </div>
    <div className={styles.selector_column}>
        <div className={styles.page}>
          <p onClick={() => setOpen(!isOpen)}>{returnPage()}</p>
        </div>
      <div className={isOpen ? styles.list : styles.hidden}>
        <p className={showAero ? styles.current : null} onClick={() => handleAero()}>{locale === 'en' ? "Airport Material" : "Material Aeroportuário"}</p>
        <p className={showGruas ? styles.current : null} onClick={() => handleGruas()}>{locale === 'en' ? "Hydraulic Cranes" : "Gruas Hidráulicas"}</p>
        <p className={showPaineis ? styles.current : null} onClick={() => handlePaineis()}>{locale === 'en' ? "Billboards" : "Painéis Publicitários"}</p>
      </div>
      <motion.div className={styles.arrow}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants = {{
              open: {
                transform: "rotate(-180deg)"
              },
              closed: {
                transform: "rotate(0)"
              }
            }}
            transition={{ duration: 0, type: "tween"}}
            onClick={() => setOpen(!isOpen)}
            >
              <Image src={`/static/icons/arrow.svg`} width={14} height={14}/>
          </motion.div>
    </div>
  </section>
    { showAero ? <Aero_equipment /> : null }
    { showGruas ? <Gruas /> : null }
    { showPaineis ? <Paineis /> : null }
  </>
  )
}

export default Equipamentos