import React from 'react';

export default function SecondComponent(props) {
   
        return (
            <>
            <form onSubmit={ e => {
                e.preventDefault();
                alert("submitting")}
            } >
            <input />
            <button>
                press
            </button>
            </form>
                
            </>
        );
    
}

