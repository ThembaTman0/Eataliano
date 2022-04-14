import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import React from 'react'

function Recipe() {
  let params=useParams();
  // Recall we are no longer retriving an array just an object(paragraph) hence no need for useState([]);
  const [details, setDetails]=useState({});
  const [activeTab, setActiveTab]= useState("instuctions");
  const fetchDetails = async () =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=50`);
    const detailData = await data.json();
    
    setDetails(detailData);
    console.log(detailData);
  } 

  useEffect(() =>{
    fetchDetails();
  },[params.name]);

  return (
    
    <DetailWrapper
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
      <center>

      
      <div>
        <h2>{details.title}</h2>
        
        <Image src={details.image} alt="">
        
        </Image>
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Intructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === 'instructions' && (
            <div>
                  {/* WHAT???? */}
              <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                  
              <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>
        )}
        {activeTab === 'ingredients' && (
            <ul>
              {details.extendedIngredients.map((ingredient) =>
                <li key={ingredient.id}>
                  {ingredient.original}
                </li>
              )}
            </ul>
        )}
 
      </Info>
      </center>
    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;

  .active{
    
    background: #ff9900;
    color: white;
    box-shadow: rgba(255, 69, 0, 0.6) 0px 8px 24px;
  }
  h2{
    margin-bottom: 2rem;
    font-family: 'Lobster Two', cursive;
    font-size: 2rem;
  }
  h3{
    margin-top: 2rem;
  }
  li{
    font-size: 1.1rem;
    line-height: 2.5rem;
    margin-top: 2rem;
    font-weight: 600;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-top: 4rem;
  color: #313131;
  background: white;
  border: none;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 2rem;
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  
`;
const Image = styled.img`
  border-radius: 0.2rem;  
  
`;
const Info=styled.div`
   margin-left: 4rem;
   margin-right: 4rem;

`;
const center=styled.div`
  align-items: center;
  margin-bottom: 4rem;
`;
export default Recipe