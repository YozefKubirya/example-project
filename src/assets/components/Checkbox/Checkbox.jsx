import { useState } from "react"


export default function Checkbox(){
   const [hasAccepted,setHasAccepted]=useState(false);
   const handeleChecked=(e)=>{
      setHasAccepted(e.target.checked)
   }
   return(
      <>
      <label htmlFor="">
         <input type="checkbox" name="terms" checked={hasAccepted} onChange={handeleChecked}/>
         Agree with terms
      </label>
      <button type="button" disabled={!hasAccepted}>procced</button>
      </>
   )
}