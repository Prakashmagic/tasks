import React from "react";

const Primary = () => {

   const functionName =()=>{
    var age = prompt('enrer amount of ticket')
    var value = parseInt(age)
    switch(value){
        case 0:
        alert('50 rs third class') 
        break;

        case 1:
        alert('100 rs second class') 
        break;
        
        case 2:
        alert('130 rs first class') 
        break;

        case 3:
        alert('150 rs premium class') 
        break;
    }
   }
    return(
        <div>
            <h1>this is a primary page</h1>
            <button onClick={()=>functionName()}>click here</button>

        </div>
    )
}

export default Primary;

