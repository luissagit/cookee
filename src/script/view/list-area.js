import { randomRecipe, baseUrl} from "./random-recipe.js";
import {submitSearch, searchElement, getRecipeByArea, getRecipeByCat, showResult, showResultByCat, searchRecipe, catButton, areaButton, result} from "./filter-recipe.js";


function listArea() {
	
	
	const getListArea = () => {
		fetch(`${baseUrl}list.php?a=list`)
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				if(responseJson.error) {
					showResponseMessage(responseJson.message);
				} else {
					listArea(responseJson.meals);
				}
			})
			.catch(error => {
				showResponseMessage(error);
			})
	}

    const listArea = (meals) => {
		
        const listArea = document.querySelector("#listArea");
        listArea.innerHTML = `<h3>Select by Area</h3>`;

        meals.forEach(meals => {
            listArea.innerHTML += `
						
						<button type="button" origin="${meals.strArea}" class="button-area">
							${meals.strArea}
						</button>
            `;
        });
	}
	
	const randomRecipe = document.querySelector("random-element");
	randomRecipe.innerHTML = '';
	recipeDetail.innerHTML = '';
	const listCat = document.querySelector("#listCat");
	listCat.innerHTML = '';
	result.innerHTML = '';
	getListArea();
}

export default listArea;
