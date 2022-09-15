import {ReactComponent as Logo} from "../../assests/logo.svg"
import { NavLink } from "react-router-dom";
import {COLORS} from "../../constants/Constants";
import styled from 'styled-components';
import { HOMEFEED_PATH, API_URL } from "../../constants/Constants";
import { AiOutlineBell, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";


const Sidebar = () => {
    return ( 
<div>
<SidebarStyled className="sidebar">
<Logo/>
<NavigationLink exact to="/" > <AiOutlineHome /> Home </NavigationLink>
<NavigationLink exact to='/treasurymog'><AiOutlineUser/>Profile </NavigationLink>
<NavigationLink exact to="/notifications"><AiOutlineBell/>Notifications </NavigationLink>
<NavigationLink exact to="/bookmarks"><BsBookmark color="red" fill="green"/>Bookmarks </NavigationLink>
</SidebarStyled>
<Button>Meow</Button>
</div>


     );
}
const NavigationLink = styled(NavLink)`
  /* default styles here */
text-decoration: none;
font-weight: 500;
font-size: medium;
margin-top: 10px;
  &.active {
    color: ${COLORS.primary};
  }
`;
export default Sidebar;

const SidebarStyled = styled.div`
flex-direction: column;
display: flex;
width: 20vw;
margin-right: -20px;
margin-left: 20px;


`
const Button = styled.button`
background-color: ${COLORS.primary};
padding: 10px 10px;
margin: 5px 30px;
text-align: center;
vertical-align: middle;
color: white;
font-weight: bolder;
padding: 10px 10px;
border-radius: 10px;

`