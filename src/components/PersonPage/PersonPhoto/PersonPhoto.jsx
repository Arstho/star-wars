import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions'
import styles from './PersonPhoto.module.css'

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

const PersonPhoto = ({ personID, personPhoto, personName, setPersonFavorite, personFavorite }) => {
   const dispatch = useDispatch()

   const dispatchFavoritePeople = () => {
      if (personFavorite) {
         dispatch(removePersonFromFavorite(personID))
         setPersonFavorite(false)
      } else {
         dispatch(setPersonToFavorite({
            [personID]: {
               name: personName,
               img: personPhoto
            }
         }))
         setPersonFavorite(true)
      }
   }

   return (
      <>
         <div className={styles.container}>
            <img
               className={styles.photo}
               src={personPhoto}
               alt={personName} />
            <img
               className={styles.favorite}
               src={personFavorite ? iconFavoriteFill : iconFavorite}
               onClick={dispatchFavoritePeople} alt="icon" />
         </div>
      </>
   )
}

PersonPhoto.propTypes = {
   personID: PropTypes.string,
   personPhoto: PropTypes.string,
   personName: PropTypes.string,
   setPersonFavorite: PropTypes.func,
   personFavorite: PropTypes.bool,
}

export default PersonPhoto
