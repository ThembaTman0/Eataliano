import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
           {/* <FaPizzaSlice/>  */}
           <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
           {/* <FaHamburger/>  */}
           <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
           {/* <GiNoodles/>  */}
           <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
           {/* <GiChopsticks/>  */}
           <h4>Japanese</h4>
        </SLink>

    </List>
  )
}
const SLink=styled(NavLink)`
   

   align-items: center;
   margin-right: 3rem;
   text-decoration: none;
   cursor: pointer;

   

   h4{
      font-size: 0.8rem;
      color: black;
      font-weight: 300;
      
      padding: 0rem 1.2rem;
   }

   svg{
      display: flex;
      font-size: 1.5rem;
      color: white;
   }

   &.active{
      
      background: linear-gradient(to right, #f27121, #e94057);
      svg{
         color: white;
      }
      h4{
         
         color: #ff9900;
      }
   }

`;
const List=styled.div`

    margin: 0rem 0rem;
`;
export default Category