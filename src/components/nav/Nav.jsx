import {Link} from "react-router-dom"
import {Div} from "./Nav.styled"

const Nav = () => {
  return (
    <Div>
        <ul>
            <Link href="">Home</Link>
            <Link href="">People</Link>
            <Link href="">Contact</Link>
            <Link href="">Login</Link>
        </ul>
      
    </Div>
  )
}

export default Nav
