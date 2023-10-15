import styles from './page.module.scss'
import Section1 from './sections/section1'
import Section2 from './sections/section2'

const Home = () => {
  
  return (
    <main className={styles.home}>
      <Section1 />
      <Section2 />
    </main>
  )
}

export default Home