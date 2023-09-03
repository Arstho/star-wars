import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getApiResource } from '@utils/network'
import { API_PERSON } from '../../constants/api'

import styles from './PersonPage.module.css'
import { withErrorApi } from '../../hoc-helper/withErrorApi'

const PersonPage = ({ setErrorApi }) => {
   const { id } = useParams()
   const [personInfo, setPersonInfo] = useState(null)
   const [personName, setPersonName] = useState(null)

   useEffect(() => {
      (async () => {
         const res = await getApiResource(`${API_PERSON}/${id}/`)
         if (res) {
            setPersonInfo([
               { title: 'Heigth', data: res.heigth },
               { title: 'Mass', data: res.mass },
               { title: 'Hair color', data: res.hair_color },
               { title: 'Skin color', data: res.skin_color },
               { title: 'Eye color', data: res.eye_color },
               { title: 'Birth year', data: res.birth_year },
               { title: 'Gender', data: res.gender },
            ])
            setPersonName(res.name)
            setErrorApi(false)
         } else {
            setErrorApi(true)
         }
      })()
   }, [])

   return (
      <div>
         <h1>{personName}</h1>
         {personInfo && (
            <ul>
               {personInfo.map(({title, data}) => (
                  data && (
                     <li key={title}>
                        <span>{title}: {data}</span>
                     </li>
                  )
               ))}
            </ul>
         )}
      </div>
   )
}

PersonPage.propTypes = {
   setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)
