import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Header.module.css';
import Navigator from './Navigator';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoContent}>
              <img src="/rapido.png" alt="NetVeloz" width={40} height={40} />
              <span className={styles.logoText}>NetVeloz</span>
            </div>
          </Link>
        </div>
        <div><Navigator /></div>

        <div className={styles.rightSide}>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <Link href="/" className={isActive('/') ? styles.active : ''}>Home</Link>
            <Link href="/planos" className={isActive('/planos') ? styles.active : ''}>Planos</Link>
            <Link href="/duvidas" className={isActive('/duvidas') ? styles.active : ''}>Dúvidas</Link>
          </nav>

          <div className={styles.headerButtons}>
            <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}