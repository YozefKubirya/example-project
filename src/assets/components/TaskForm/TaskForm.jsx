export default function TaskForm ({onAdd}){
const handleSubmit =(e)=>{
   e.preventDefault();
   onAdd(
     { id:Date.now(),
      text:e.target.elements.text.value
     }
   )
   e.target.reset();
}
   return(
   <>
   <div>
<form onSubmit={handleSubmit}>
   <input type="text" name="text"/>
   <button type="submit">Add Task</button>
</form>
   </div>
   </>)
}