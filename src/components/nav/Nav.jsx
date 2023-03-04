import {Link} from "react-router-dom"
import {Div , Links} from "./Nav.styled"

const Nav = () => {
  return (
    <Div>
        <ul>
            <Links to="">Home</Links>
            <Links to="">People</Links>
            <Links to="">Contact</Links>
            <Links to="">Login</Links>
        </ul>
      
    </Div>
  )
}

export default Nav
