import css from '../TaskList/TaskList.module.css'
import Task from "../Task/Task"
export default function TaskList({tasks, onDelete}){
   return (<>
   <div className={css.taskContainer}>
      <ul className={css.taskList}>
         {tasks.map((task)=>(
             <li key={task.id}><Task data={task} onDelete={onDelete}/></li>)
         )}
      </ul>
   </div>
   </>)
}