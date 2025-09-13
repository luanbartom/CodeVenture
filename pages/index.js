import Head from 'next/head';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Plans from '../src/components/Plans';
import Footer from '../src/components/Footer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>NetVeloz - Internet de Alta Velocidade</title>
        <meta name="description" content="Internet fibra óptica de alta velocidade com os melhores planos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Hero />
        <section className={styles.benefits}>
          <div className={styles.container}>
            <h2>Por que escolher a NetVeloz?</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <i className="fas fa-bolt"></i>
                <h3>Alta Velocidade</h3>
                <p>Internet fibra óptica com velocidade garantida</p>
              </div>
              <div className={styles.benefit}>
                <i className="fas fa-headset"></i>
                <h3>Suporte 24/7</h3>
                <p>Atendimento técnico especializado a qualquer hora</p>
              </div>
              <div className={styles.benefit}>
                <i className="fas fa-wifi"></i>
                <h3>Instalação Grátis</h3>
                <p>Não cobramos taxa de instalação</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.preview}>
          <div className={styles.container}>
            <h2>Nossos Planos</h2>
            <Plans limit={3} />
            <div className={styles.ctaContainer}>
              <Link href="/planos" className={styles.ctaButton}>Ver Todos os Planos</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}