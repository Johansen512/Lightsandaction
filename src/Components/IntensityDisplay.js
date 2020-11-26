/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect, useCallback} from 'react';
import {throttle} from 'lodash';
import convert from 'color-convert';
import {colors} from 'color-name';
import { SketchPicker } from 'react-color'




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
background-color:hsl(${hueK}, ${satPercent}%, ${brightPercent}%);

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

const colortest= css`

width:150px;
height:150px;
border: solid black 2px;
background-color:hsl(330, 100%, 60%);
`;

const inputstyle= css`
display:flex;
flex-direction: row-reverse;
padding:1rem;
margin: 1rem;
`;

const inputP= css`
font-size:1rem;
padding:0.5rem;
margin: 0.5rem;
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
    let BrightConvert = (Math.floor(brightRaw*2.54))
    console.log (BrightConvert)
console.log (brightRaw)

function saturationInput (e){ setSatRaw (parseInt(e.target.value))
  }
  let SatConvert = (Math.floor(satRaw*2.54))
console.log (SatConvert)
  console.log (satRaw)


  function hueInput (e){ setHueK (parseInt(e.target.value))
    }
    
    console.log (hueK)

    let HueConvert = (Math.floor(hueK*182))
console.log (HueConvert)
    //let throttled = useCallback(throttle(OpacSlider, 300),[])
    //console.log(throttled);

    function newColor () {
setHueGrade(hueK);
setBrightPercent(brightRaw);
setSatPercent(satRaw)

setHue (HueConvert);
setBright(BrightConvert);
setSaturation(SatConvert);


}

console.log (hueGrade, satPercent, brightPercent )
    

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

<div css={inputstyle}>
      <p css={inputP}>Brightness</p>
      <input css={inputP}  type="number" min="0" max="100" 
      value={brightRaw} onChange={ BrightInput}step="1"/>
      <p css={inputP}>Saturation</p>
      <input  css={inputP} type="number" min="0" max="100" 
      value={satRaw} onChange={ saturationInput }step="1"/>
       <p css={inputP} >Hue</p>
      <input css={inputP} type="number" min="1" max="360" 
      value={hueK} onChange={ hueInput }step="1"/>
</div>
    <div css={colortest}>test</div>

    <SketchPicker />
      </div>
      
    );
}
 
export default IntensityDisplay;