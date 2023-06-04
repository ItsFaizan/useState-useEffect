import React from 'react';

const Button = ({onClick , children}) => {

  return(
        <button onClick={ e =>{
         e.stopPropagation();
         onClick();  } }> 
        {children}
        </button>
  )
}

export default function FirstComponent() {
 
    return (
      <div className='Toolbar' onClick={()=>{
        alert("hi")
      }} >
      <Button onClick = {()=>{
          alert('hockey')
      }}>
          Play Hockey
      </Button>
      <Button onClick = {()=>{
          alert('football')
      }}>
          Play football
      </Button>

      </div>
    );
  }