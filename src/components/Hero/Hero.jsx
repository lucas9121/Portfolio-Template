import styles from './Hero.module.css'

export default function Hero({sticky}) {
  return (
    <section className={!sticky ? styles.homeHero : styles.homeHero && styles.hide}>
      <h1 >Hello World</h1>
      <h2>I'm Batman</h2>
      <div className={styles.homeHeroInfo}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, rerum omnis. Ea vero, omnis nesciunt dolor ratione minima consequuntur voluptas officia libero, sed expedita id labore dignissimos excepturi ab? Repellat.
        </p>
      </div>
    </section>
  )
}