/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect} from 'react'



//Slider til lysstyrke ... 

const IntensityDisplay = ({props}) => {

  const [bright, setBright] = useState("0");

  const [saturation, setSaturation] = useState("0");

  const [hue, setHue] = useState("0");

  const [intensity, setIntensity] = useState ("0")
  
  const [intensity2, setIntensity2] = useState ("0")

  const [intensity3, setIntensity3] = useState ("0")


  const style= css`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  padding: 0.5rem;
  
  
  
  `;



const sliderstyle = css`
  
appearance: none;
background-color: #CECECE;
height: 0.1rem;
width: 260px;
margin: 0 1rem;
outline:none;



`;

useEffect(() => {
  fetch("https://192.168.8.100/api/pYM6C8UDfoyukjCyr0gw7t2AovyIB4S-Chl2DEQb/lights/4/state", {
  method: "PUT",

 body:JSON.stringify({"sat":saturation, "bri":bright,"hue":hue})
 
} )
.then (response => response.json())
.then (results => console.log (results))
  
}, [saturation, bright, hue]);












function OpacSlider (e){
console.log (intensity)

setIntensity (e.target.value)
setBright (parseInt(intensity))
}

console.log (bright)

function saturationSlider (e){
  console.log (intensity2)
  
  setIntensity2 (e.target.value)
  setSaturation (parseInt(intensity2))
  }
  
  console.log (saturation)


  function hueSlider (e){
    console.log (intensity3)
    
    setIntensity3 (e.target.value)
    setHue (parseInt(intensity3))
    }
    
    console.log (hue)

    return ( 
       <div css={style}>
         <p>Brightness</p>
      <input css={sliderstyle} type="range" min="0" max="254" 
      value={intensity} onChange={ OpacSlider }step="1"/>
      <p>Saturation</p>
      <input css={sliderstyle} type="range" min="0" max="254" 
      value={intensity2} onChange={ saturationSlider }step="1"/>
       <p>Hue</p>
      <input css={sliderstyle} type="range" min="0" max="65535" 
      value={intensity3} onChange={ hueSlider }step="1"/>
      </div>
      
    );
}
 
export default IntensityDisplay;