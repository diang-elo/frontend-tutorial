import React from 'react'
import axios from 'axios';
import '../App.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Searched() {

  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();

  const getSearch = (e) => {

    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.term)
      .then(function (response) {
        console.log(response.data.meals)
        setSearchedRecipe(response.data.meals)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getSearch(params.term);
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [params.term])

  return (
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
              <a class='tag'target="_blank" rel="noreferrer" href={item.strSource}>Recipe</a>
              <a class='tag'target="_blank" rel="noreferrer" href={item.strYoutube}>Video</a>
              </div>
              </div>

              

            </div>
          );
        })}

      </div>

    </div>


  )
}

export default Searched