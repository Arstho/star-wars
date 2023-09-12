import React from 'react'
import UIVideo from '@UI/UIVideo';
import video from './video/hansolo.mp4'

import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
   return (
      <>
         <p className={styles.text}>
            The dark side of the force has won.<br />
            We cannot display data.<br />
            Come back when we fix everething
         </p>
         <UIVideo
            src={video}
            classes={styles.video}
            playbackRate={1} />
      </>
   )
}

export default ErrorMessage
