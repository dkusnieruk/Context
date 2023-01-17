import { useState } from "react"
import { useUser } from "./context";

const RegisterUser = () =>{
    const {logIn} = useUser();
    const [value, setValue] = useState("");
    return(
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)}>
            </input>
            <button onClick={()=> logIn(value)}>Register</button>
        </div>
    )
}

export default RegisterUser