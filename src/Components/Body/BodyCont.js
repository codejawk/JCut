import React from 'react'
import City from './CityOfService'
import Service from './Service'
function BodyFn(){
    const styles={fontSize:50}
    return (
        <div >
            <br></br><br></br><br></br>
            <h1 style={styles}>Get A Better Look, At Home</h1>

        <City/>
                <br></br><br/>
        <Service />   
       
    </div>
       
    )
}

export default BodyFn