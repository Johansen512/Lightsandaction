/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect, useCallback} from 'react';
import {throttle} from 'lodash';




//Slider til lysstyrke ... 

const IntensityDisplay = ({props}) => {


  const [bright, setBright] = useState("0");

  const [saturation, setSaturation] = useState("0");

  const [hue, setHue] = useState("0");

  


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












function OpacSlider (e){ setBright (parseInt(e.target.value))}

console.log (bright)

function saturationSlider (e){ setSaturation (parseInt(e.target.value))
  }
  
  console.log (saturation)


  function hueSlider (e){ setHue (parseInt(e.target.value))
    }
    
    console.log (hue)
    let throttled = useCallback(throttle(OpacSlider, 300),[])
    console.log(throttled);
    return ( 
       <div css={style}>
         <p>Brightness</p>
      <input css={sliderstyle} type="range" min="0" max="254" 
      value={bright} onChange={ throttled }step="1"/>
      <p>Saturation</p>
      <input css={sliderstyle} type="range" min="0" max="254" 
      value={saturation} onChange={ saturationSlider }step="1"/>
       <p>Hue</p>
      <input css={sliderstyle} type="range" min="0" max="65535" 
      value={hue} onChange={ hueSlider }step="1"/>
      </div>
      
    );
}
 
export default IntensityDisplay;