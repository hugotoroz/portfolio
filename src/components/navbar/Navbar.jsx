import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        hugotoroz.dev
      </a>
      <div className={styles.menu}>
        <i className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          
        </i>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">Sobre Mí</a>
          </li>
          <li>
            <a href="#experience">Exp. Laboral</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contáctame</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
