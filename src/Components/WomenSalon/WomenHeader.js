import React from 'react'
import { Link } from 'react-router-dom'

function MenHeader(){
    const stylesA={textAlign:"left",margin:25,fontSize:50}
    const stylesB={textAlign:"center",marginTop:40,fontSize:25}
   
    return (
        <div className="navbarMen" style={{display:"flex",justifyContent:"space-between"}} >
            <div><h1 style={stylesA}>
            <Link to="/"> JCut </Link>
            </h1></div>
            <div><h3 style={stylesB}>Women's Haircut & Grooming</h3></div> 
        <div></div><div></div>
        </div>
    )
}


export default MenHeader