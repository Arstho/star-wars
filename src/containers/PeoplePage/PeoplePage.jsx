import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helper/withErrorApi'

import PeopleList from '@components/PeopleList/PeopleList'
import { getApiResource, changeHTTP } from '@utils/network'
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData'
import { API_PEOPLE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams'
import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
   const [people, setPeople] = useState(null)
   const [prevPage, setPrevPage] = useState(null)
   const [nextPage, setNextPage] = useState(null)
   const [counterPage, setCounterPage] = useState(1)
   const query = useQueryParams()
   const queryPage = query.get('page')

   useEffect(() => {
      const getResource = async () => {
         const res = await getApiResource(API_PEOPLE + queryPage)

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
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(API_PEOPLE + queryPage))
            setErrorApi(false)
         } else {
            setErrorApi(true)
         }
      }
      getResource()
   }, [queryPage])

   return (
      <>
         <h1 className='header__text'>Navigation</h1>
         {people && <PeopleList people={people} />}
      </>
   )
}

PeoplePage.propTypes = {
   setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)
