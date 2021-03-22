import React from 'react'
import { Link } from 'react-router-dom'


function Header(){
    const stylesA={textAlign:"left",margin:25,fontSize:50,color:"#e6d9cc"}
    const stylesB={margin:30, fontSize:19}
    const stylesC={textAlign:"right",margin:30, fontSize:19,color:"#e6d9cc"}
    const stylesD={textAlign:"right",margin:25, fontSize:19,color:"#e6d9cc"}
    return (
    
<div className="navbar" style={{display:"flex", justifyContent:"space-between"}}>
       <div> <h1 style={stylesA}>
       <Link to="/"> JCut </Link>
       </h1></div>
       
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <a href='https://www.urbancompany.com/delhi-ncr' style={stylesB}><u>Register as a Professional</u></a>
        <h2 style={stylesC}>blog </h2>
        <h2 style={stylesD}>SignIn</h2>

        </div>
        </div>
    )
}


export default Header