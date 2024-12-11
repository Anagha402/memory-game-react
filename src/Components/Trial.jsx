import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import broom from '../assets/images/broom.svg'
import bat from '../assets/images/bat.svg'
import candle from '../assets/images/candle.svg'
import ghost from '../assets/images/ghost.svg'
import hat from '../assets/images/hat.svg'
import pot from '../assets/images/pot.svg'
import pumpkin from '../assets/images/pumpkin.svg'
import skull from '../assets/images/skull.svg'

function Cards({ timeLeft, setGameStatus, restartGame }) {
    const[items,setItems]=useState([
        {id:1, img: broom , status:''},
        {id:1, img: broom, status:''},
        {id:2, img: candle, status:''},
        {id:2, img: candle, status:''},
        {id:3, img: ghost, status:''},
        {id:3, img: ghost, status:''},
        {id:4, img: bat, status:''},
        {id:4, img: bat, status:''},
        {id:5, img: hat, status:''},
        {id:5, img: hat, status:''},
        {id:6, img: pot, status:''},
        {id:6, img: pot, status:''},
        {id:7, img: pumpkin, status:''},
        {id:7, img: pumpkin, status:''},
        {id:8, img: skull, status:''},
        {id:8, img: skull, status:''}
    ].sort(()=>Math.random() -0.5))


    const[prev, setPrev]= useState(-1)


    useEffect(() => {
      // Check win condition
      if (items.every(item => item.status === 'correct')) {
        setGameStatus('won');
      }
    }, [items, setGameStatus]);
    
    //handleClick
    function handleClick(id){
      //alert(id);
      //items[id].status='active'
      //setItems([...items])
      if(prev=== -1){
        items[id].status='active'
        setItems([...items])
        setPrev(id)

        

      }else{
        check(id)
      }
    }

    function check(current){
      if(items[current].id== items[prev].id){
        items[current].status= "correct"
        items[prev].status= "correct"
        setItems([...items])
        setPrev(-1)
      }else{
        items[current].status= "wrong"
        items[prev].status= "wrong"
        setItems([...items])
        setTimeout(()=>{

          items[current].status= ""
          items[prev].status= ""
          setItems([...items])
          setPrev(-1)

        }, 1000)
      }
    }
  return (
    <>
      <div className="container bg-info" style={{height:"600px", width:"600px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gridTemplateRows:"repeat(4,1fr"}}>
    {
        items.map((item, index)=>(
        <SingleCard item={item} key={index}  handleClick={handleClick} id={index}/>

        ))
    }
    </div>


   


    
    </>
  )
}

export default Cards


{/* <div className="timer bg-warning" style={{position:"relative"}}>
         <img src={sidebar} alt="" height={"90px"} style={{top:"150px"}} /> 
        <img src={clock} alt="" height={"50px"} style={{position:"absolute", top:"170px"}}/>
        <p className="text-light" style={{position:"absolute"}}> Time Left: {timeLeft >= 0 ? `${timeLeft}s` : '0s'}</p>
        
    
        

        </div> */}

