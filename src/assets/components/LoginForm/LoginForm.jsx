import { useId } from "react";
export default function LoginForm ({onLogin}){
   const loginId=useId();
   const passwordId=useId();
   const handleSubmit=(e)=>{
e.preventDefault();
const form=e.target;
const {login,password}=form.elements;
// console.log(login.value,password.value);
onLogin({
   login:login.value,
   password:password.value
})
form.reset();
   }
   return (<>
   <div>
      <form onSubmit={handleSubmit}>
         <label htmlFor={loginId}>
            Login
             <input type="text" name="login" id={loginId}/>
             </label>
        <label htmlFor={passwordId}>
         Password
         <input type="text" name="password" id={passwordId}/>
         </label>
        
         <button type="submit">log in</button>
      </form>
   </div>
   </>)
}