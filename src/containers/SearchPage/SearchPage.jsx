import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
   const [inputSearchValue, setInputSearchValue] = useState('')
   const [people, setPeople] = useState([])

   const getResponse = async (param) => {
      const res = await getApiResource(API_SEARCH + param)

      if (res) {
         const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)
            return {
               id,
               name,
               img
            }
         })
         setPeople(peopleList);
         setErrorApi(false)
      } else {
         setErrorApi(true)
      }
   }

   useEffect(() => {
      getResponse('')
   }, [])

   const handleInputChange = (event) => {
      setInputSearchValue(event.target.value)
      getResponse(event.target.value)
   }
   return (
      <>
         <h1 className='header__text'>SearchPage</h1>
         <input
            type="text"
            placeholder="Input character's name"
            value={inputSearchValue}
            onChange={handleInputChange}
         />
         <SearchPageInfo people={people} />
      </>
   )
}

SearchPage.propTypes = {
   setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage)
