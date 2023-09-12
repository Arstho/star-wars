import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import cn from 'classnames'

import '../index.css'
import styles from './UIVideo.module.css'

const UIVideo = ({ src, classes, playbackRate = 1.0 }) => {
   const videoRef = useRef(null)

   useEffect(() => {
      videoRef.current.playbackRate = playbackRate
   }, [])

   return (
      <video
         className={cn(styles.video, classes)}
         playbackRate={playbackRate}
         loop
         muted
         autoplay='autoplay'
         src={src}
         ref={videoRef}
         type='video/mp4'
      >
         <source srs={src}  />
      </video>
   )
}

UIVideo.propTypes = {
   src: PropTypes.string,
   playbackRate: PropTypes.number,
   classes: PropTypes.string,
}

export default UIVideo
