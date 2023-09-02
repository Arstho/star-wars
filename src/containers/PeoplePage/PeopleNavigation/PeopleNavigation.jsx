import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UIButton from '@components/UI/UIButton/UIButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ prevPage, nextPage, counterPage, getResource }) => {

   const handleChangeNext = () => getResource(nextPage)
   const handleChangePrev = () => getResource(prevPage)

   return (
      <div className={styles.conteiner}>
         <Link className={styles.buttons} to={`/people/?page=${counterPage - 1}`}>
            <UIButton
               text='Previous'
               onClick={handleChangePrev}
               disabled={!prevPage}
            />
         </Link>
         <Link className={styles.buttons} to={`/people/?page=${counterPage + 1}`}>
            <UIButton
               text='Next'
               onClick={handleChangeNext}
               disabled={!nextPage}
            />
         </Link>
      </div>
   )
}

PeopleNavigation.propTypes = {
   getResource: PropTypes.func,
   prevPage: PropTypes.string,
   nextPage: PropTypes.string,
   counterPage: PropTypes.number,
}

export default PeopleNavigation
