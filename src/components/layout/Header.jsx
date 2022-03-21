import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaWindowMinimize } from 'react-icons/fa'

import styles from './Header.module.css';
import Logo from '../../images/costs_logo.png';

export default function Header() {

  const[menu, setMenu] = useState(false)
  
  const openMenu = () => {
    setMenu(true)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  return (
    <nav className={styles.header}>
        <Link to="/">
          <img src={Logo} alt="home costs" />
        </Link>

        <ul className={styles.list}>
          <li>
            <Link className={styles.listItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/company">
              Sobre
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/contact">
              Contato
            </Link>
          </li>
          <li>
            <Link className={styles.listItem} to="/projects">
              Meus Projetos
            </Link>
          </li>
        </ul>

        <div className={styles.sidebar}>
          <FaBars className={styles.openIcon} onClick={openMenu} />

          {menu && (
            <div className={styles.sidebar_container}>

              <div className={styles.wrapIcon}>
                <FaWindowMinimize onClick={closeMenu} className={styles.closeIcon} />
              </div>

              <ul className={styles.sidebar_list}>
                <Link to="/" className={styles.li} onClick={closeMenu}>HOME</Link>
                <Link to="/company" className={styles.li} onClick={closeMenu}>SOBRE</Link>
                <Link to="/contact" className={styles.li} onClick={closeMenu}>CONTATO</Link>
                <Link to="/projects" className={styles.li} onClick={closeMenu}>MEUS PROJETOS</Link>
              </ul>
            </div>
          )}
        </div>
    </nav>
  );
}
