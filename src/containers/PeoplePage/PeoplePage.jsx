import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helper/withErrorApi'

import PeopleList from '@components/PeopleList/PeopleList'
import { getApiResource } from '@utils/network'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import { API_PEOPLE } from '@constants/api'
import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
   const [people, setPeople] = useState(null)

   useEffect(() => {
      const getResource = async () => {
         const res = await getApiResource(API_PEOPLE)

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
            setPeople(peopleList)
            setErrorApi(false)
         } else {
            setErrorApi(true)
         }
      }
      getResource()
   }, [])

   return (
      <>
         <h1>Navigation</h1>
         {people && <PeopleList people={people} />}
      </>
   )
}

PeoplePage.propTypes = {
   setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)
