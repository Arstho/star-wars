import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './SearchPageInfo.module.css'


const SearchPageInfo = ({ people }) => {
   return (
      <>
         {people.length
            ? (
               <ul>
                  {people.map(({ id, name, img }) => (
                     <li key={id}>
                        <Link to={`/people/${id}`}>
                           <img src={img} alt={name} />
                           <p>{name}</p>
                        </Link>
                     </li>
                  ))}
               </ul>
            )
            : <h2>No results</h2>
         }
      </>
   )
}

SearchPageInfo.propTypes = {
   people: PropTypes.array,
}

export default SearchPageInfo
