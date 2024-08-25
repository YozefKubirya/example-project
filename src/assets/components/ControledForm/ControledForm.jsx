import { useState } from "react"
export default function ControledForm (){
const [values,setFormValues]=useState({
   login:'',
   password:''
});
const handleChange=(e)=>{
setFormValues(
   {  ...values,
      [e.target.name]:e.target.value,
   }
)
}
const handleSubmit= (e)=>{
   e.preventDefault(),
console.log(values)
setFormValues({
   login:'',
   password:''
})
}

   return (<>
   <div>
      <form action="" onSubmit={handleSubmit}>
<input type="text" name="login" onChange={handleChange} value={values.login}/> Login
<input type="password" name="password" onChange={handleChange} value={values.password}/>  Password
<button type="submit">Log in</button>
      </form>
      
   </div>
   </>)
}