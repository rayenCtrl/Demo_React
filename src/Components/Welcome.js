import React from 'react'

export default function Welcome(props) {
    console.log(`props`,props)
    const styleObject ={color:"green", textAlign:'center'}
    function handleClick(e){
        e.preventDefault();
        alert("an alert");
    }
    return (
    <>
    
    <div style={styleObject} >Welcome{props.name}</div>
    <button onClick={()=>props.alertMyInput("haahah Got Ya !")}> 
    ClickMe!
    </button>
    <a href='/' onClick={handleClick}>ClickMe</a>
    <h2>Welcome {props.children}</h2>
    </>
    )
}
