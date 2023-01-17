import { useUser } from "./context"

const Menu = () =>{
    const {userName, logIn, logOut} = useUser();
    return (
        <div>
            <h3>Username: { userName ? userName : "guest"}</h3>
            {userName ? (<button onClick={logOut}>LogOut</button>):
            (
            <button onClick={
                ()=> logIn("John")
            } >Login John</button>)}
        </div>
    )
}

export default Menu