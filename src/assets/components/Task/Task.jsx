import css from '../Task/Task.module.css'
export default function Task ({data:{text,id},onDelete}){
   const handleDelete=()=>{
      onDelete(id)
   }
   return (<>
   <div className={css.textContainer}>
      <p className={css.taskText}>{text}</p>
      <button type="button" onClick={handleDelete}>DeleteTask</button>
   </div>
   </>)
}