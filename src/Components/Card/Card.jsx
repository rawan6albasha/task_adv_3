import React from 'react';
import style from './Card.module.css';


const Card = (props) => {
  
  return (
    <div className={style.cards}>
      {props.dataCard.map((item ,index) => (
        <div key={index}  className={style.card}>
<img src={item.src}/>
<div className={style.part1}><p>{item.type}</p><span>{item.price}</span></div>
<b className={style.part2}>{item.add}</b>
<div className={style.part3}>
<div className={style.part33}><p>Bedrooms:</p><b>{item.Bedrooms}</b></div>
<div className={style.part33}><p>Pathrooms:</p><b>{item.Pathrooms}</b></div>
<div className={style.part33}><p>Area:</p><b>{item.Area}</b></div>
<div className={style.part33}><p>Floor:</p><b>{item.Floor}</b></div>
<div className={style.part33}><p>Parking:</p><b>{item.Parking}</b></div>
</div>
<hr/>
<p className={style.part4}>Schedule a visit</p>
        </div>
        
      ))}
    </div>
  );
};

export default Card;
