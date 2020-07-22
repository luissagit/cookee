import { randomRecipe, baseUrl} from "./random-recipe.js";
import {submitSearch, searchElement, getRecipeByArea, getRecipeByCat, showResult, showResultByCat, searchRecipe, catButton, areaButton, result} from "./filter-recipe.js";


function listCat() {

	const getListCat = () => {
		fetch(`${baseUrl}list.php?c=list`)
			.then(response => {
				return response.json();
			})
			.then(responseJson => {
				if(responseJson.error) {
					showResponseMessage(responseJson.message);
				} else {
					listCat(responseJson.meals);
				}
			})
			.catch(error => {
				showResponseMessage(error);
			})
	}

    const listCat = (meals) => {
        const listArea = document.querySelector("#listCat");
        listArea.innerHTML = `<h3>Select by Category</h3>`;

        meals.forEach(meals => {
            listArea.innerHTML += `
						
						<button type="button" cat-id="${meals.strCategory}" class="button-cat">${meals.strCategory}</button>
            `;
        });
	}
	const randomRecipe = document.querySelector("random-element");
	randomRecipe.innerHTML = '';
	recipeDetail.innerHTML = '';
	const listArea2 = document.querySelector("#listArea");
	listArea2.innerHTML ='';
	result.innerHTML = '';
	getListCat();
}

export default listCat;
