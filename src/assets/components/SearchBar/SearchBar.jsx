import { useState } from "react"
export default function SearchBar (){
   const [inputValue,setInputValue]=useState('')
   const handleInputValue=(evt)=>{
      setInputValue(evt.target.value)
console.log(evt.target.value);
   }
   const handleResetInput=()=>{
      setInputValue('')
   }
   return (<>
   <div>
 <input type="text" value={inputValue} onChange={handleInputValue}/>
<p >inputValue : {inputValue}</p>
<button onClick={handleResetInput}>Reset</button>
  </div>
   </>)
}