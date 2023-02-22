import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        //we should delagate the actual logging out to the users service
        userService.logOut()
        setUser(null)
    }

    return(
        <nav>
            <Link to="/locations" className="nav-link">Locations</Link>
            &nbsp; — &nbsp;
           <span>Greetings, {user.name}</span>
           &nbsp; — &nbsp;
           <Link to="" onClick={handleLogOut} className="nav-link">Log Out</Link>
        </nav>
    )
}