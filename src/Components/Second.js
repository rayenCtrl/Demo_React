import React from 'react';
import robot from '../Media/robot.jpg'

export default function Second() {
 
  let input = (<input type="text" placeholder='1+1 = !?'/>);
  let button = <button>Submit</button>;
  return (
            <>
            <form>
                {input}
                {button}
            </form>
            <img style={{width:'50%'}} src={robot} alt="robot"/> 
            </>  
          );
}

