import React from 'react'
import Robot from '../Media/robot.jpg'

export default function Profile() {
    const Profile=({ProfilePhoto,FullName,Skills})=>{
        <>
        <div>
            <span><img></img>> {ProfilePhoto}</span>
        </div>
        <div>
            <span>rayen: {FullName}</span>
        </div>
        <div>
            <span>many things: {Skills}</span>
        </div>
        </>
    };
  return (
    <div>{Profile}</div>
  )
}
