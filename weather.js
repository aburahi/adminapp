import React from "react";
import { useState } from "react";
const Weather=()=>{
    const [temp1,settemp1]=useState();
    const [humidity,sethumidity]=useState(0);
    let temp=fetch('http://api.weatherapi.com/v1/current.json?key=de54c02d111c49d29f041755240602&q=Kolkata')
    temp.then(response => response.json())
    .then(d => {
        settemp1(d.current.temp_c);
        console.log(d.current.humidity)
        sethumidity(d.current.humidity);
    })
    return(
        <div>
            <h1>Weather Kolkata</h1>
            <h1>temperature: {temp1}</h1>
            <h1>humidity: {humidity}</h1>
        </div>
    )
}
export default Weather;
