import React, { useState } from 'react'
import { getApiResource } from '@utils/network';

import styles from './SearchPage.module.css';

const SearchPage = () => {
   const [inputSearchValue, setInputSearchValue] = useState('')

   const getResponse = async (param) => {
      const res = await getApiResource()
   }

   const handleInputChange = (event) => {
      setInputSearchValue(event.target.value)
      getResponse(event.target.value)
   }
   return (
      <div>
         <h1 className='header__text'>SearchPage</h1>
         <input
            type="text"
            placeholder="Input character's name"
            value={inputSearchValue}
            onChange={handleInputChange}
         />
      </div>
   )
}

export default SearchPage
