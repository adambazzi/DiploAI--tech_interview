
import styles from './page.module.css'
export default function Home() {
  return (
    <section className={styles.intro_section}>
      <div className={styles.intro_text}>
        Hello. Hope you hire me! Click on <span className={styles.highlight}>part 1 and 2</span> in the navbar to checkout my work!
      </div>
    </section>
  )
}
