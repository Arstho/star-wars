
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {

   const handleGoBack = (e) => {
      e.preventDefault()
      console.log('back');
   }
   return (
      <a
         href='#'
         onClick={handleGoBack}
         className={styles.link}
      >
         <span>Go back</span>
      </a>
   )
}

export default PersonLinkBack
