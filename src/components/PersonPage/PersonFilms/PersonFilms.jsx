import PropTypes from 'prop-types'

import styles from './PersonFilms.module.css'

const PersonFilms = ({ personFilms }) => {
   return (
      <div>
{personFilms.map(film => (
   <img src={film} alt="film" />
))}
      </div>
   )
}

PersonFilms.propTypes = {
   personFilms: PropTypes.array
}

export default PersonFilms
