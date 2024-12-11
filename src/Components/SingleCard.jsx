import React from 'react'

function SingleCard({item, handleClick, id}) {
  const itemClass=item.status? ' active ' + item.status : ""
  return (
    <>
    <div className={"card " + itemClass} onClick={()=>handleClick(id)}>
        <img src={item.img} alt="" />
    </div>
      
    </>
  )
}

export default SingleCard
