import {useFormik} from "formik"

const formValidation =(values)=>{
    const errors = {};

}


export function Basicform() {

    const formik = useFormik({
        initialvalues : {email:"pavan@",password:""},
        validate:formValidation,
        onSubmit:(values)=>{
            console.log("onsubmit",values)
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <input type="email" placeholder="plz enter email" />
        <input type="password" placeholder="plz enter password" value />
        <button type="submit">Submit</button>
    </form>
  );
}
