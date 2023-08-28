import styles from './PeoplePage.module.css'
import { useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'
import PeopleList from '../../components/PeopleList/PeopleList'

const PeoplePage = () => {
   const [people, setPeople] = useState(null)

   useEffect(() => {
      const getResource = async () => {
         const res = await getApiResource(API_PEOPLE)
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
      }
      getResource()
   }, [])

   return (
      <>
         {people && <PeopleList people={people} />}
      </>
   )
}

export default PeoplePage
