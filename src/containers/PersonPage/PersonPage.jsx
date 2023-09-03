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
               { title: 'Heigth', dat: res.heigth },
               { title: 'Mass', dat: res.mass },
               { title: 'Hair color', dat: res.hair_color },
               { title: 'Skin color', dat: res.skin_color },
               { title: 'Eye color', dat: res.eye_color },
               { title: 'Birth year', dat: res.birth_year },
               { title: 'Gender', dat: res.gender },
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
         {id}
      </div>
   )
}

PersonPage.propTypes = {
   setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage)
