import React,{useState,useEffect}from 'react'
import { connect,useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";


const Timer=()=> {
    const[count,setCount]=useState(0);
    const dispatch = useDispatch();
    var Interv;

     useEffect(()=>{
        Interv= setInterval(()=>{
        setCount(prevCount =>prevCount+1);
       },1000);
       return()=>{
        clearInterval(Interv);
       }
     })

     return (
    <div style={{textAlign:'center'}}><br/><br/><br/>
        {count}
        <br/>
        <br/>
        <Button onClick={()=>dispatch({type:'clearInter',stops:clearInterval(Interv)})}>Stop Timer</Button>
        <br/>
        <br/>
        </div>
  )
}

export default connect(state=>state)(Timer);
