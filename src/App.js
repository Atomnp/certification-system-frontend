import './App.css'

import {Event} from './Components/Event'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react';

function App() {



 

  const onDelete=(event)=>{
    console.log("Lets go to hell",event)
    setevents(events.filter((e)=>{
     
      return e!==event;
    }))

   }
   const onEdit=(event)=>{
    

   }

   const onView=(event)=>{
    console.log("aayena",event)   

   }

  
  const [events,setevents]=
  useState([  ])
  const addEvent=(title, desc,date1,date2)=>{
    console.log("I am adding event",title,desc)
    
    if (events.length===0){
      var sn=1;
    }
    else
    { sn=events[events.length-1].sn+1;}
    const myevent={
      sn:sn,
      title:title,
      desc:desc,
      date1:date1,
      date2:date2
    }
    setevents([...events,myevent]);
    console.log(myevent)

   
    
      }
  return (
  
    <div className="App">

{/* <SideBar /> */}
      
   
  <Event addEvent={addEvent} events={events} onDelete={onDelete} onEdit={onEdit} onView={onView}/>
 
 
  </div>
  );
}

export default App;
