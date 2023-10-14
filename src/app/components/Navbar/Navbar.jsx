import { formattedDate } from '@/app/helpers/getFormattedDate';
import styles from './Navbar.module.scss'
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";

const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
const Navbar = () => {
  const currentDate = formattedDate(options)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.searchContainer}>
          <CiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search any thing..." className={styles.searchInput} />
        </div>
        <div className={styles.currentDay}>
          <p className={styles.date}>{currentDate}</p>
          <div className={styles.settingsContainer}>
            <div className={styles.settings}>
              <VscBell className={styles.iconSetting} />
            </div>
            <div className={styles.notifi}>3</div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar