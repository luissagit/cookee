import renderFooter from "./view/footer.js";
import { randomRecipe, baseUrl} from "./view/random-recipe.js";
import listArea from "./view/list-area.js";
import listCat from "./view/list-cat.js";
import naviBar from "./view/navigation.js";
import {getMealById, showDetail} from "./view/recipe-detail.js";
import {submitSearch, searchElement, getRecipeByArea, getRecipeByCat, showResult, showResultByCat, searchRecipe, catButton, areaButton, result} from "./view/filter-recipe.js";


const homeNav = document.getElementById("nav-home");
const oriNav = document.getElementById("nav-origin");
const catNav = document.getElementById("nav-cat");
const searchNav = document.getElementById("nav-search");

function main() {
	renderFooter();
	
	randomRecipe();

	homeNav.addEventListener("click", randomRecipe);

	oriNav.addEventListener("click", listArea);

	catNav.addEventListener("click", listCat);

	const navBar0 = document.getElementById("navBar");

	navBar0.addEventListener("click", naviBar);

	submitSearch.addEventListener("click", searchRecipe);

	catButton.addEventListener('click', event => {
		
		const listCat = event.path.find(item => {
			if (item.classList) {
				return item.classList.contains('button-cat');
			} else {
				return false;
			}
		});

		if (listCat) {
			const category = listCat.getAttribute('cat-id');
			console.log(category);
			getRecipeByCat(category)
		}
	});

	areaButton.addEventListener('click', event => {
		
		const listArea = event.path.find(item => {
			if (item.classList) {
				return item.classList.contains('button-area');
			} else {
				return false;
			}
		});

		if (listArea) {
			const origin = listArea.getAttribute('origin');
			console.log(origin);
			getRecipeByArea(origin)
		}
	});

}

export default main;