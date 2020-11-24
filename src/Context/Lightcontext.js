import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();


const DataContextProvider = (props) => {
    const [data, setData] = useState(null);
    const [opac, setOpac] = useState("0.0");
    

    useEffect(() => {
        fetch("http://192.168.8.100/api/pYM6C8UDfoyukjCyr0gw7t2AovyIB4S-Chl2DEQb/lights/4", {
        method: "PUT",

       body:JSON.stringify ({"on":false, "sat":254, "bri":254,"hue":10000})
     } )
        
    }, []);
    
    data && console.log(data)
  
    return (<dataContext.Provider value={{ data, setData, setOpac, opac }}>




    {props.children}
    </dataContext.Provider>

    );
};
 
export default DataContextProvider;