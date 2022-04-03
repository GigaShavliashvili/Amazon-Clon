import React,{useState, useEffect} from 'react'
import "./slider.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Slider = props => {
const items = props.images;
const [curentIndex, setCurentIndex] = useState(1)
   let lastIndex = items.length - 1;

    useEffect(() =>{
if(curentIndex < 0){
    setCurentIndex(lastIndex)
}
if(curentIndex > lastIndex){
    setCurentIndex(0)
}
    },[curentIndex, items])

    useEffect(() =>{
let slider  = setInterval(() =>{
setCurentIndex(curentIndex  + 1)

}, 3000)
return clearInterval(slider)
    },[curentIndex])

    if(items.length === 0){
    return <h1>Loading...</h1>
} else

  return (
   
        <div className='HomeSlider'>
            <div className='HomeSlider__Center'>
            {
            items.map((image, imageIndex) =>{
       
let position = "nextSlider"
if(imageIndex === curentIndex){
    position = "activSlider"
}
if(imageIndex === curentIndex - 1 || (curentIndex === 0 && imageIndex === items.length - 1)){
    position= "lastSlider"
}
return <article className={position} key={imageIndex}>
    <div className='banner'>
            <img src={image} alt="" />
    </div>
</article>
            })
            }
            <button className='prev'>
                 <ArrowBackIosIcon onClick={() => setCurentIndex(curentIndex - 1)}/>
            </button>
             <button className='next'>
                 <ArrowForwardIosIcon onClick={() => setCurentIndex(curentIndex + 1)}/>
             </button>
        </div>
        </div>
 
  )
}

export default Slider