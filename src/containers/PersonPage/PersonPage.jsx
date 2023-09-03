import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { getApiResource } from '@utils/network'
import { API_PERSON } from '../../constants/api'

import styles from './PersonPage.module.css'

const PersonPage = () => {
   const { id } = useParams()

   useEffect(() => {
      (async () => {
         const res = await getApiResource(`${API_PERSON}/${id}/`)
         console.log(`${API_PERSON}/${id}/`);
      })()
   }, [])

   return (
      <div>
         {id}
      </div>
   )
}

export default PersonPage
