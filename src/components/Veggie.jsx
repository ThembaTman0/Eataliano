import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Veggie() {
  const [veggie, setVeggie]=useState([]);

  useEffect(() => {
      getVeggie();
  },[]);
  const getVeggie = async () =>{
      
      // CREAT CACHE ON LOCAL STOrAGE\
      // NOTE LOCALSTORAGE ONLY SAVES STRINGS HENCE **parse & stringify**
      const check =localStorage.getItem('veggie');

      // if there is somethin
      if(check){
          setVeggie(JSON.parse(check));
      
      }
      // if empty
      else{
          const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
          const data=await api.json();
      //    STORE IT HERE AFTER FETCH
          localStorage.setItem('veggie', JSON.stringify(data.recipes));

          setVeggie(data.recipes);
          console.log(data);
      }

  //

  }
  return (
    <div>
      
      <Wrapper>
                    <h3>Vegetarian Picks</h3>

                    <Splide options={{
                        perPage:4,
                        arrows: false,
                        pagination:false,
                        drag: "free",
                        gap: "3rem"
                    }}>

                    {veggie.map((recipe) => {
                        return(
                            <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={"/recipe/"+recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                                </Link>
                            </Card>
                            </SplideSlide>
                        );
                    })}
                    </Splide>
                </Wrapper>
    </div>
  );
}


const Wrapper = styled.div`
    margin: 4rem 0rem;
    

    h3{

        text-align: center;
        font-size: 1.4rem;
        // font-family: 'Lobster Two', cursive;
    }
`;

const Card = styled.div`
    height: 19rem;
    width: 15rem;
    border-radius: 0.2rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 4rem;
    margin-top: 1rem;
    margin-left: 2rem;
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;


    
    img {
        border-radius: 0.2rem 0.2rem 0rem 0rem;
        
        position: absolute;
        left: 0;
        width: 100%;
        height: 80%;
        object-fit: cover;
        
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: black;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 0.8rem;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items-center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    

`;
export default Veggie