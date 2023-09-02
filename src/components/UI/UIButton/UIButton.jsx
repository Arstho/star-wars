
import PropTypes from 'prop-types'

import cn from 'classnames'

import '../index.css'
import styles from './UIButton.module.css'

const UIButton = ({ text, onClick, disabled, thema = 'dark', classes }) => {
   return (
      <button
         disabled={disabled}
         onClick={onClick}
         className={cn(styles.button, styles[thema], classes)}>
         {text}
      </button>
   )
}

UIButton.propTypes = {
   text: PropTypes.string,
   onClick: PropTypes.func,
   disabled: PropTypes.bool,
   thema: PropTypes.string,
   classes: PropTypes.string,
}

export default UIButton
