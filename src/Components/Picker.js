/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {useState, useEffect, useCallback} from 'react';
import { SketchPicker } from 'react-color'

const Picker = () => {

    const [color, setColor] = useState("#fff")
    const [background, setBackground] = useState ("#ff0000")
    const [thatothercolor, setThatothercolor] = useState ("#000000")
    

  
    const handleChangeComplete = (color) => {
        setColor(color.hsl );
        setThatothercolor (color.hsv);
        setBackground(color);
      };

      

     
       
  
  
  
      console.log (color)  
  console.log (color.h)
  console.log (color.s)
  console.log (color.l)
  console.log (thatothercolor)
  console.log (thatothercolor.h)
  console.log (thatothercolor.s)
  console.log (thatothercolor.v)
  console.log (background)
  
    return ( 

<SketchPicker 
color={color}
onChange={handleChangeComplete} />

     );
}
 
export default Picker;