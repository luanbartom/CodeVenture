import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>


          <div className={styles.footerSection}>
            <h3>Planos</h3>
            <ul>
              <li><a href="http://localhost:3000/planos">Básico - 50 Mbps</a></li>
              <li><a href="http://localhost:3000/planos">Intermediário - 150 Mbps</a></li>
              <li><a href="http://localhost:3000/planos">Avançado - 300 Mbps</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="http://localhost:3000/">Home</a></li>
              <li><a href="http://localhost:3000/planos">Planos</a></li>
              <li><a href="http://localhost:3000/duvidas">Dúvidas</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <ul>
              <li><i className="fas fa-phone"></i> (11) XXXX-XXXX</li>
              <li><i className="fas fa-whatsapp"></i> (11) 9 XXXX-XXXX</li>
              <li><i className="fas fa-envelope"></i> contato@netveloz.com.br</li>
              <li><i className="fas fa-map-marker-alt"></i> São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt="YouTube" width={40} height={40} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} NetVeloz - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}