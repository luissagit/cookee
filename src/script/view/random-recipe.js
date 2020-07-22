const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
import {submitSearch, searchElement, getRecipeByArea, getRecipeByCat, showResult, showResultByCat, searchRecipe, catButton, areaButton, result} from "./filter-recipe.js";

function randomRecipe() {
	
	fetch(`${baseUrl}random.php`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.error) {
				showResponseMessage(responseJson.message);
			} else {
				renderRandom(responseJson.meals);
			}
		})
		.catch(error => {
			showResponseMessage(error);
		})
}

function renderRandom(meals) {
		const listArea = document.querySelector("#listArea");
		const listCat = document.querySelector("#listCat");
		recipeDetail.innerHTML = '';
		listArea.innerHTML = '';
		listCat.innerHTML = '';
		result.innerHTML = '';
	
	
        const randomRecipe = document.querySelector("random-element");
        randomRecipe.innerHTML = "";

        meals.forEach(meals => {
            randomRecipe.innerHTML += `
						<div class="random-card toDetail" meal-id="${meals.idMeal}">
							
							<img src ="${meals.strMealThumb}"></img>
							<div id="fact">
							<h3>Start Cooking ${meals.strMeal}</h3>
							<p>
								Cookee provide a complete variety of recipes. The recipe is from many regions, you can search for it by category, regional origin and search for the name of the food. Our recommendation today is ${meals.strMeal}. This type of ${meals.strCategory} food is ${meals.strArea} food.
							</p>
							</div>
						</div>
            `;
        });

}


export {baseUrl, randomRecipe};