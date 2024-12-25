import padsdata from "./pads"
import React from 'react'
import  Pad from './Pad'

export default function App() {
  
     const [pads,setPads]= React.useState(padsdata)
     
    
     function toggle(id){
      setPads(prevPads=>prevPads.map(item=>{
        return item.id === id? {...item,on: !item.on}:item
      }) )


     }

     const buttonElements = pads.map(pad =>(
      <Pad key = {pad.id} color={pad.color} on={pad.on}/>
     ))

    return (
        <main>
            <div className="padcontainer">
                {buttonElements}
            </div>
        </main>
    )
}    