import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Pescetarian() {
  const [veggie, setPescetarian]=useState([]);

  useEffect(() => {
      getPescetarian();
  },[]);
  const getPescetarian = async () =>{
      
      // CREAT CACHE ON LOCAL STOrAGE\
      // NOTE LOCALSTORAGE ONLY SAVES STRINGS HENCE **parse & stringify**
      const check =localStorage.getItem('pescetarian');

      // if there is somethin
      if(check){
          setPescetarian(JSON.parse(check));
      
      }
      // if empty
      else{
          const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=pescetarian`);
          const data=await api.json();
      //    STORE IT HERE AFTER FETCH
          localStorage.setItem('pescetarian', JSON.stringify(data.recipes));

          setPescetarian(data.recipes);
          console.log(data);
      }

  //

  }
  return (
    <div>
      
      <Wrapper>
                    <h3>Pescetarian</h3>

                    <Splide options={{
                        perPage:4,
                        arrows: false,
                        pagination:false,
                        drag: "free",
                        gap: "5rem"
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
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    

    
    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 300;
        font-size: 1rem;
        height: 40%;
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
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`;
export default Pescetarian