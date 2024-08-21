import { useId } from "react"
export default function LangSwitcher({value,onSelect}){
   
   const selectedId=useId();
   const handleSelect=(e)=>{
     onSelect(e.target.value) 
   }
   return (
   <>
   <div>
      <label htmlFor={selectedId}>Choose Language</label>
      <select  id={selectedId} onChange={handleSelect} value={value}>
         <option value="en">English</option>
         <option value="uk">Ukraine</option>
         <option value="sp">Spanish</option>
      </select>
   </div>
   </>)
}