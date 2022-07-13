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
    <div class='landing-body'>

        <div class='centered'>
        <form>
            <input class='search-input' type='search' placeholder='Search Recipe' onChange={(event) => {setRecipe(event.target.value)}}></input>
            <button class="submit-btn" type='submit' onClick={submitForm}>Search</button>
        </form>
        </div>
        


    </div>
  )
}

export default Landing