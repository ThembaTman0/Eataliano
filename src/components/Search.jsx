import styled from 'styled-components'
import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import {useNavigate} from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");

    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/'+input);
    };
  return (
    
    <FormStyle onSubmit={submitHandler}>
        
        <div>
            <FiSearch></FiSearch>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Search"/>
        </div>
        
    </FormStyle>
  );
}

const FormStyle = styled.form`
    
    
    div{
        width: 100%;
        position: relative;
        font-weight: 400;
    }
    input{
        border: none;
        background: white;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        font-size: 0.8rem;
        color: black;
        padding: 0.8rem 2.3rem;
        border: none;
        border-radius: 5rem;
        outline: none;
        width: 100%;
        
        
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: black;
    }
`;

export default Search