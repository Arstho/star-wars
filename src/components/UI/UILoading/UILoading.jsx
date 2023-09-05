import { useEffect, useState } from 'react'
import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'
import PropTypes from 'prop-types'

import cn from 'classnames'

import styles from './UILoading.module.css'

const UILoading = ({ thema = 'white', isShadow = true, classes }) => {
   console.log(thema);
   const [loaderIcon, setLoaderIcon] = useState(null)

   useEffect(() => {
      switch (thema) {
         case 'black':
            setLoaderIcon(loaderBlack)
            break;
         case 'white':
            setLoaderIcon(loaderWhite)
            break;
         case 'blue':
            setLoaderIcon(loaderBlue)
            break;
         default:
            setLoaderIcon(loaderWhite)
      }
   }, [])

   return (
      <img className={cn(styles.loader, isShadow && styles.shadow, classes)} src={loaderIcon} alt="Loader" />
   )
}

UILoading.propTypes = {
   thema: PropTypes.string,
   isShadow : PropTypes.bool,
   classes: PropTypes.string,
}

export default UILoading
