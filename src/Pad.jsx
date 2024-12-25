import React from "react"


export default function Pad(props) {
   
    function playSound() {
        const audio = new Audio(props.sound);
        audio.play();
    }
   
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : null}
            onClick={()=>{
                
                props.toggle(props.id)
                playSound();
            }
               
            }
        ></button>
    )
}