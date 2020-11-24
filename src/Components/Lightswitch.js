/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect} from 'react';
import IntensityDisplay from "../Components/IntensityDisplay";  

const Lightswitch = ({opac}) => {
const style= css`

width:200px;
height:200px;
background-color:red;
border:solid 1rem darkred;
border-radius:50%;
font-weight:bold;
font-size:1.5rem;
color:#ffffff;
padding: 0.5rem;
outline: none;
cursor: pointer;

&:hover{
    background-color: darkred;
    }

`;




    const [light, setLight]=useState(false)

    useEffect(() => {
        fetch("https://192.168.8.100/api/pYM6C8UDfoyukjCyr0gw7t2AovyIB4S-Chl2DEQb/lights/4/state", {
        method: "PUT",

       body:JSON.stringify({"on":light, "sat":254, "bri":{opac},"hue":10000})
       
     } )
     .then (response => response.json())
     .then (results => console.log (results))
        
    }, [light, opac]);

console.log (light)
    return (  
<div>
<button css={style} onClick={()=> setLight(!light)}>TÆND/SLUK!</button>

<IntensityDisplay />
</div>
    );
}
 
export default Lightswitch;