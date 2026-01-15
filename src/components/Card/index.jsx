import React from 'react'
import  "./Card.module.scss";

const Card = (props) => {
    
  return (
    <>
    <article>
        <div>{props.title}</div>
        
  <input type="button" value="+ Adicionar meta" />
        
 
    </article>

    </>

  )
}

export default Card;