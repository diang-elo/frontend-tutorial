import React from 'react'
import axios from 'axios';
import '../App.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


function Searched() {

  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();
  const navigate = useNavigate();


  useEffect(() => {

    const getSearch = (e) => {

      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.term)
        .then(function (response) {
          console.log(response.data.meals)
          setSearchedRecipe(response.data.meals)
          if (response.data.meals == null) {
            setSearchedRecipe([]);
            const nullDisplay = document.getElementById('request-null');
            nullDisplay.classList.remove('hidden');
          }
          else {
            const showDisplay = document.getElementById('request-exists');
            showDisplay.classList.remove('hidden');
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    };

    getSearch(params.term);

  }, [params.term])


  return (

    <div class=''>

      <div id='request-null' class='hidden centered landing-title' > No Recipe Found </div>

      <div id='request-exists' class='hidden'>

        <header class="search-header">{params.term}
          <button onClick={() => navigate(-1)} className='return-button'>Back </button>
        </header>
        <div class='searched-body'>
          <div class='searched-container'>

            {searchedRecipe.map((item) => {
              return (
                <div class='card' key={item.idMeal}>
                  <div class='card-header'>
                    <img src={item.strMealThumb} alt=""></img>
                  </div>

                  <div class='card-body'>
                    <h1>{item.strMeal}</h1>
                    <p> Meal Category: {item.strCategory} </p>
                    <p>Meal Area: {item.strArea}</p>
                    <p>Meal Tags: {item.strTags}</p>
                    <div class='tag-container'>
                      <a class='tag' target="_blank" rel="noreferrer" href={item.strSource}>Recipe</a>
                      <a class='tag' target="_blank" rel="noreferrer" href={item.strYoutube}>Video</a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

    </div>

  )
}

export default Searched