import React from 'react';
import pic from '../images/d.jpg'
import styled from 'styled-components';


function Landing() {
  return (
          
        <Card>
            <div>
                <h1>Enjoy your Delicious Food</h1>
                <h4>The only thing we love more than food is you!</h4>
                <h4>We've got something for everyone</h4>
                <a href='#PopularDiv'><h3 className='calltoact'>Let's get cooking</h3></a>
            </div>
            
            <img src={pic} alt=''/>
        </Card>
    
    
  )
}

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
    h1{
        font-size: 6rem;
        padding-bottom: 1rem;
    }

    img {
        padding-left: 5rem;
        width: 30rem;
        height: 35;
    }
    h3{
        color: #ff9900;
    }

`;

export default Landing