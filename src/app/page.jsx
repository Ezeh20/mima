import styles from './page.module.scss'
import Section1 from './sections/section1'

const Home = () => {

  return (
    <main className={styles.home}>
      <Section1 />
    </main>
  )
}

export default Home