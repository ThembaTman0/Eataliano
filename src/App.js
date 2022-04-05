
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { GiKnifeFork } from "react-icons/gi";



function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

      
      <BrowserRouter>
        <NavBar className="menu-bar">
        <Nav >
          <GiKnifeFork/>
          <Logo to={"/"}>Eataliano</Logo>
        </Nav>
        <ul >
            <li className="sub-menu-color" ><Link to={"/"}>Home</Link></li>
            <li>Menu
              <div className="sub-menu">
                <ul>
                <Category />
                </ul>
              </div>
            </li>
            <li ><Link to={"/special/"}>Special</Link></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <Search/>
        </NavBar>
        
        
        
        <Pages />
        
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem
  }

`;

const NavBar= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  
  li{
    padding: 0px 20px;
  }

  ul{
    display: flex;
    font-size: 0.9rem;
    font-weight: 600;
    justify-content: space-between;
    list-style-type: none;
      
  }

  
`;



export default App;
