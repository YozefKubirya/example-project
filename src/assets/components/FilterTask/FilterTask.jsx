import css from '../FilterTask/FilterTask.module.css'
export default function FilterTask ({value,onFilter}){
  
  const handleFilter =(e)=>{
onFilter(e.target.value)
  }
   return(<>
   <div>
     <input type="text" value={value} onChange={handleFilter}/>
     <p className={css.text}>Filter your task</p>
   </div>
   </>)
}