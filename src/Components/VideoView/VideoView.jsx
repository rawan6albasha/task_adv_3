import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faPlay } from '@fortawesome/free-solid-svg-icons';
import style from './VideoView.module.css'


import backgroundImg from '/src/assets/images/img.jpg'
import video_img from '/src/assets/images/video-frame.jpg'
import Title from '../Title/Title';

const VideoView = () => {
  const TitleData={
    span:'VIDEO VIEW',
    pargh:"Get Closer View & Different Feeling",
    direction:false,
    ColorP:true
}
  return (
    <div className={`${style.video_view}  section_margin `}>
    <div className={style.video_part}>
      <img className={style.background_img} src={backgroundImg}/>
      <div className={style.video_absolute}>

      <Title TitleData={TitleData}/>
      
      <div className={`${ style.video_frame } container`}>
        <img className={style.video_img} src={video_img}/>
        <span><FontAwesomeIcon icon={faPlay} /></span>
      </div>

      </div>
      </div>
{/*_____________________________________________________________ */}
      <div className={`${ style.counters } container`}>
      <div className={style.counter}><p className={style.counter_num}>34</p><p className={style.counter_title}>Buildings Finished Now</p> <span></span></div>
      <div className={style.counter}><p className={style.counter_num}>12</p><p className={style.counter_title}>Years Experience</p> <span></span></div>
      <div className={style.counter}><p className={style.counter_num}>24</p><p className={style.counter_title}>Awwards Won 2023</p> <span></span></div>
      
      </div>
    </div>
  )
}

export default VideoView
