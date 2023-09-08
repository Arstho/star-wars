import { Link } from 'react-router-dom'
import icon from './img/bookmark.svg'
import styles from './Favorite.module.css'

const Favorite = () => {
   return (
      <div className={styles.conrainer}>
         <Link to='/favorites'>
            <span className={styles.counter}></span>
            <img className={styles.icon} src={icon} alt="icon" />
         </Link>
      </div>
   )
}

export default Favorite
