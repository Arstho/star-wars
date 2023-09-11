import PropTypes from 'prop-types'
import cn from 'classnames'
import icon from './img/cancel.svg'

import '../index.css'
import styles from './UIInput.module.css'

const UIInput = ({ value, handleInputChange, placeholder, classes }) => (
   <div className={cn(styles.wrapper__input, classes)}>
      <input
         type="text"
         value={value}
         onChange={(e) => handleInputChange(e.target.value)}
         placeholder={placeholder}
         className={styles.input}
      />
      <img
         src={icon}
         alt="Clear"
         onClick={() => value && handleInputChange('')}
         className={cn(styles.clear, !value && styles.clear__disabled)}
      />
   </div>
)

UIInput.propTypes = {
   value: PropTypes.string,
   handleInputChange: PropTypes.func,
   placeholder: PropTypes.string,
   classes: PropTypes.string,
}

export default UIInput
