import React,{useState} from 'react'
import { useNavigate } from 'react-router';
export let org_name="";

function Welcome (){

   

    const nav= useNavigate();

    const [name,setName]=useState ();

  

    const click=(e)=>{

        e.preventDefault();
         org_name=name;
        nav("/protogame/game")
    
    }

  return (

    <div className="welcome">
        <h1 style={{margin:"0", color:"white", textAlign:"center", fontSize:"100px", fontWeight: "normal"}}>Welcome</h1>
        <form>
            <input type="text" value={name} style={{  position:"relative",top:"100px",left: "39%",height: "25px", width: "300px"}} onChange={event => setName(event.target.value)} ></input>
            <button className="button-18" role="button" onClick={click}>GO AHEAD</button>
        </form>
    </div>
  )
}
export default Welcome;