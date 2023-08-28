import { useEffect, useState } from 'react'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'

const PeoplePage = () => {
   const [people, setPeople] = useState(null)

   useEffect(() => {
      const getResource = async () => {
         const res = await getApiResource(API_PEOPLE)
         const peopleList = res.results.map(({ name, url }) => {
            return {
               name,
               url
            }
         })
         setPeople(peopleList)
      }
      getResource()
   }, [])

   return (
      <>
         {people && (
            <ul>
               {people.map(({ name, url }) => (
                  <li key={name}>{name}</li>
               ))}
            </ul>
         )}
      </>
   )
}

export default PeoplePage
