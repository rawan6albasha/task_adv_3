
import style from './Title.module.css'
const Title = (props) => {
    { console.log(props.TitleData.direction);} 
  return (
    <div className={style.title}>
    <div className={props.TitleData.direction?style.title_start:style.title_center}>
    <span >{props.TitleData.span}</span>
    <p className={props.TitleData.ColorP?style.white_color:""}> {props.TitleData.pargh}</p>
</div>
</div>
  )
}

export default Title
