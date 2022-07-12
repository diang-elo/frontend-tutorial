import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {


    const [recipe,setRecipe] = useState('');
    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();
        navigate('/recipe/' + recipe);
    }

  return (
    <div className='centered'>

        <div>
        <form>
            <input type='search' placeholder='Search here...' onChange={(event) => {setRecipe(event.target.value)}}></input>
            <button type='submit' onClick={submitForm}>Search</button>
        </form>
        </div>
        


    </div>
  )
}

export default Landing