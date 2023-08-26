import { bellefair, barlow, barlowCondensed } from '@/app/font'
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.home_main}>
      <div className={`${styles.home_text_component}`}>
        <p className={`${barlowCondensed.className} ${styles.home_sub_title}`}>So, you want to travel to</p>
        <p className={`${bellefair.className} ${styles.home_title}`}>Space</p>
        <p className={`${barlow.className} ${styles.home_para}`}>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </div>

      <div className={`${styles.explore_component}`}>
        <div className={`${bellefair.className} ${styles.white_explore}`}>Explore</div>
      </div>
    </main>
  )
}
