import React from 'react'

function Sidebar({ timeLeft, gameStatus }) {
  

return (
    <>

    <div className="containrer d-flex flex-column">
{/* timer section */}
        <div className="timer" style={{marginTop:"150px"}}>
        <p className="text-light fw-bolder" style={{fontSize:"30px"}} > Time Left: {timeLeft >= 0 ? `${timeLeft}s` : '0s'}</p>
        </div>

       
   
        
      
    {/* Game Status */}
 {gameStatus && <h2 style={{ textShadow:"2px 2px 2px red", fontSize:"40px"}} className=" text-center text-light fw-bolder  mt-5">{gameStatus === 'won' ? 'Congrats You Won' : 'Sorry You Lost'}</h2>
        
        
      }

   
      

</div>
 
    
      
    </>
  )
}

export default Sidebar
