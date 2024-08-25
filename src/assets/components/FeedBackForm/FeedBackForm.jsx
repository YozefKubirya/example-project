import { Formik ,Form,Field, ErrorMessage} from "formik";
import { useId } from "react";
import * as Yup from "yup";
const FeedbackSchema = Yup.object().shape({
   username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
   email: Yup.string().email("Must be a valid email!").required("Required"),
   message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
   level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
 });
export default function FeedBackForm(){
const emailId=useId();
const userNameId=useId() 
const userMessageID=useId();
const levelId=useId()
const handleSubmit = (values,actions)=>{
console.log(values);
actions.resetForm();
   }
 return <>
   <Formik initialValues={{
      username:"",
      email:"",
      message:"",
      level:"good"
   }} onSubmit={handleSubmit}
   validationSchema={FeedbackSchema}>
      <Form>

        <div>
         <label htmlFor={userNameId}>UserName</label>
        <Field type="text" name="username" id={userNameId}/>
        <ErrorMessage name="username" component="span" />
        </div>
        
       <div> 
         <label htmlFor={emailId}>Email</label>
       <Field type="email" name="email" id={emailId}/> 
       <ErrorMessage name="email" component="span" />
       </div>

        <div>
         <label htmlFor={userMessageID}>Message</label>
        <Field as="textarea" name="message" id={userMessageID} rows="1"/>
        <ErrorMessage name="message" component="span" />
        </div>

       <div>
          <label htmlFor={levelId}>Service satisfaction level</label>
       <Field as ="select" name="level" id={levelId}>
         <option value="good">Good</option>
         <option value="neutral">Neutral</option>
         <option value="bad">Bad</option>
       </Field>
       <ErrorMessage name="level" component="span" />
       </div>
       
<button type="submit"> Submit</button>
      </Form>
   </Formik>
   </>
}