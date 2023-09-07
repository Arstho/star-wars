import PropTypes from 'prop-types'

import styles from './PersonPhoto.module.css'
import { useDispatch } from 'react-redux'
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions'

const PersonPhoto = ({ personID, personPhoto, personName }) => {
   const dispatch = useDispatch()

   const set = () => {
      dispatch(setPersonToFavorite({
         [personID]: {
            name: personName,
            img: personPhoto
         }
      }))
   }
   const remove = () => {
      dispatch(removePersonFromFavorite(personID))
   }

   return (
      <>
         <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt={personName} />
         </div>
         <button onClick={set}>Добавить в избранное</button>
         <button onClick={remove}>Удалить из избранного</button>
      </>
   )
}

PersonPhoto.propTypes = {
   personID: PropTypes.string,
   personPhoto: PropTypes.string,
   personName: PropTypes.string
}

export default PersonPhoto
