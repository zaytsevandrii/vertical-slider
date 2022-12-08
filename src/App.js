import { useRef, useState } from "react"
import "./App.scss"

function App() {
  const[slightLenght,setSlight] = useState(4)
  const[moveRight,setMoveRight] = useState(0)
  const[moveLeft,setMoveLeft] = useState(0)
  const ref = useRef()
  const[activeSliderIndex,setSliderIndex] = useState(0)
  const changeSlide = (direction)=>{
    const sliderHeight = ref.current.clientHeight
    if(direction==='up'){
      setSliderIndex(activeSliderIndex+1)
      if(activeSliderIndex>slightLenght-2){
        setSliderIndex(0)
      }
    }else if(direction==='down'){
      setSliderIndex(activeSliderIndex-1)
      if(activeSliderIndex<1){
        setSliderIndex(slightLenght-1)
      }
    }

    setMoveRight(activeSliderIndex*sliderHeight)
    setMoveLeft(activeSliderIndex*sliderHeight)
  }
    return (
        <div className="container" ref={ref}>
            <div className="left-slide" style={{top:`-${(slightLenght-1)*100}vh`,transform:`translateY(${moveLeft}px)`}}>
                <div style={{ background: "#fd3555" }}>
                    <h1>Nature flower</h1>
                    <p>All in pink</p>
                </div>
                <div style={{background: "#2A86BA"}}>
                    <h1>Bluuue Sky</h1>
                    <p>with it's mountains</p>
                </div>
                <div style={{background: "#252E33"}}>
                    <h1>Lonely castle</h1>
                    <p>in the wilderness</p>
                </div>
                <div style={{background: "#FFB866"}}>
                    <h1>Flying eagle</h1>
                    <p>in the sunset</p>
                </div>
            </div>
            <div className="right-slide" style={{transform:`translateY(-${moveRight}px)`}}>
              <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"}}></div>
              <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')"}}></div>
              <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')"}}></div>
              <div style={{backgroundImage:"url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')"}}></div>
            </div>
            <div className="action-buttons">
                <button className="down-button" onClick={()=>changeSlide('down')}>
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button className="up-button" onClick={()=>changeSlide('up')}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    )
}

export default App
