/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect, useCallback} from 'react';
import {throttle} from 'lodash';
import convert from 'color-convert';
import {colors} from 'color-name';




//Slider til lysstyrke ... 

const IntensityDisplay = ({props}) => {


  const [bright, setBright] = useState("0");

  const [saturation, setSaturation] = useState("0");

  const [hue, setHue] = useState("0");

  const [brightRaw, setBrightRaw] = useState("0");

  const [satRaw, setSatRaw] = useState("0");

  const [hueK, setHueK] = useState("0");

  const [hueGrade, setHueGrade] = useState ("0")

  const [satPercent, setSatPercent] = useState ("0")

  const [brightPercent, setBrightPercent] = useState ("0")

  

  


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
//(hueGrade, satPercent, brightPercent);
const stylecolor= css`

width:150px;
height:150px;
background-color:hsl(${hueGrade}, ${satPercent}%,${brightPercent}%); 
border:solid 1rem black;
border-radius:50%;
font-weight:bold;
font-size:1.5rem;
color:#ffffff;
padding: 0.5rem;
margin: 2rem;
outline: none;
cursor: pointer;

&:hover{
    background-color: darkred;
    }

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


    function BrightInput (e){ setBrightRaw (parseInt(e.target.value))}

console.log (brightRaw)

function saturationInput (e){ setSatRaw (parseInt(e.target.value))
  }
  
  console.log (satRaw)


  function hueInput (e){ setHueK (parseInt(e.target.value))
    }
    
    console.log (hueK)

    let HueConvert = (Math.floor(hueK/182))
console.log (HueConvert)
    //let throttled = useCallback(throttle(OpacSlider, 300),[])
    //console.log(throttled);

    function newColor () {
setHueGrade(HueConvert);
setBrightPercent(brightRaw);
setSatPercent(satRaw)}

console.log (hueGrade, brightPercent, satPercent)
    

/*let farveting = convert.hsl.hsb(69, 120, 14000);
console.log (farveting)

//(brightRaw, satRaw, hueK)*/


    return ( 
       <div css={style}>
         <p>Brightness</p>
      <input css={sliderstyle} type="range" min="0" max="254" 
      value={bright} onChange={ OpacSlider }step="1"/>
      <p>Saturation</p>
      <input css={sliderstyle} type="range" min="0" max="254" 
      value={saturation} onChange={ saturationSlider }step="1"/>
       <p>Hue</p>
      <input css={sliderstyle} type="range" min="0" max="65535" 
      value={hue} onChange={ hueSlider }step="1"/> 

      <button css={stylecolor} onClick = {newColor }>farve</button>


      <p>Brightness</p>
      <input  type="number" min="0" max="254" 
      value={brightRaw} onChange={ BrightInput}step="1"/>
      <p>Saturation</p>
      <input  type="number" min="0" max="254" 
      value={satRaw} onChange={ saturationInput }step="1"/>
       <p>Hue</p>
      <input  type="number" min="0" max="65535" 
      value={hueK} onChange={ hueInput }step="1"/>
      </div>
      
    );
}
 
export default IntensityDisplay;