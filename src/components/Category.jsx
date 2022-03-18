import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
           <FaPizzaSlice/> 
           <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
           <FaHamburger/> 
           <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
           <GiNoodles/> 
           <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
           <GiChopsticks/> 
           <h4>Japanese</h4>
        </SLink>

    </List>
  )
}
const SLink=styled(NavLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-right: 3rem;
   text-decoration: none;
   cursor: pointer;
   background: linear-gradient(35deg, #494949,#313131);
   width: 6rem;
   height: 6rem;
   border-radius: 50%;
   

   h4{
      font-size: 0.8rem;
      color: white;
      font-weight: 300;
      padding-top:0.3rem
   }

   svg{
      font-size: 1.5rem;
      color: white;
   }

   &.active{
      
      background: linear-gradient(to right, #f27121, #e94057);
      svg{
         color: white;
      }
      h4{
         
         color: white;
      }
   }

`;
const List=styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
export default Category