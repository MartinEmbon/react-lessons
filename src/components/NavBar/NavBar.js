import {Link} from "react-router-dom"
import styled from "styled-components"

const NavBar = () => {
    return (
        <div>
            <ul>
                <Item  to="/">Home</Item>
                <Item to="/usest">useState</Item>
                <Item to="/useef">useEffect</Item>
                <Item to="/local">LocalStorage</Item>
                <Item to="/local2">LocalStorage</Item>
                <Item to="/axios">Axios</Item>
            </ul>
        </div>
    )
}

const Item = styled(Link) `
    color:red;
    margin:1rem;
`


export default NavBar