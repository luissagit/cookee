import { randomRecipe, baseUrl} from "./random-recipe.js";

const result = document.getElementById("listResult");
const areaButton = document.getElementById("listArea");
const catButton = document.getElementById("listCat");
const searchElement = document.querySelector("#searchElement");
const submitSearch = document.querySelector("#searchButtonElement");



function getRecipeByArea(origin) {
	
	fetch(`${baseUrl}filter.php?a=${origin}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.error) {
				showResponseMessage(responseJson.message);
			} else {
				showResult(responseJson.meals, origin);
			}
		})
		.catch(error => {
			showResponseMessage(error);
		})
}

function getRecipeByCat(category) {
	
	fetch(`${baseUrl}filter.php?c=${category}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.error) {
				showResponseMessage(responseJson.message);
			} else {
				console.log(responseJson);
				showResultByCat(responseJson.meals, category);
			}
		})
		.catch(error => {
			showResponseMessage(error);
		})
}

function showResult(meals, origin) {
	
	
	recipeDetail.innerHTML = '';
	 result.innerHTML = `<h3><span class="fa fa-map-marker"></span> Showing ${origin} foods</h3>`;

        meals.forEach(meals => {
            result.innerHTML += `
			<div class="result-card toDetail" meal-id="${meals.idMeal}">
				<img src="${meals.strMealThumb}"></img>
				<h4>${meals.strMeal}</h4>
			</div>
            `;
        });
		const randomRecipe = document.querySelector("random-element");
	randomRecipe.innerHTML = '';
	const listArea2 = document.querySelector("#listArea");
	listArea2.innerHTML ='';
	const listCat = document.querySelector("#listCat");
	listCat.innerHTML = '';
	recipeDetail.innerHTML = '';
}

function showResultByCat(meals, category) {
	
	
	recipeDetail.innerHTML = '';
	 result.innerHTML = `<h3><span class="fa fa-hashtag"></span> Showing ${category}</h3>`;

        meals.forEach(meals => {
            result.innerHTML += `
			<div class="result-card toDetail" meal-id="${meals.idMeal}">
				<img src="${meals.strMealThumb}"></img>
				<h4>${meals.strMeal}</h4>
			</div>
            `;
        });
	const randomRecipe = document.querySelector("random-element");
	randomRecipe.innerHTML = '';
	const listArea2 = document.querySelector("#listArea");
	listArea2.innerHTML ='';
	const listCat = document.querySelector("#listCat");
	listCat.innerHTML = '';
}

function searchRecipe(e) {
	
	
	e.preventDefault();
	const keyword = searchElement.value;
	
	
	
	if (keyword.trim()) {
		
		
		fetch(`${baseUrl}search.php?s=${keyword}`)
		.then(response => {
			return response.json()
		})
		.then(responseJson => {
			console.log(responseJson);
			result.innerHTML = `<h3><span class="fa fa-search"></span> Showing results for '${keyword}':</h3>`;

			if (responseJson.meals === null) {
				const randomRecipe = document.querySelector("random-element");
				randomRecipe.innerHTML = '';
				const listArea2 = document.querySelector("#listArea");
				listArea2.innerHTML ='';
				const listCat = document.querySelector("#listCat");
				listCat.innerHTML = '';
				recipeDetail.innerHTML = '';
				
				
				result.innerHTML = `<p>Oops I couldn't find '${keyword}'. Try again!<p>`;
			} else {
				
				const randomRecipe = document.querySelector("random-element");
				randomRecipe.innerHTML = '';
				const listArea2 = document.querySelector("#listArea");
				listArea2.innerHTML ='';
				const listCat = document.querySelector("#listCat");
				listCat.innerHTML = '';
				recipeDetail.innerHTML = '';
	
	
				const meals = responseJson.meals;
				meals.forEach(meals => {
					result.innerHTML += `
					<div class="result-card toDetail" meal-id="${meals.idMeal}">
					<img src="${meals.strMealThumb}"></img>
					<h4>${meals.strMeal}</h4>
					</div>
				`;
				})
			}
		});

	searchElement.value = '';
	} else {
		alert('Please enter a search keyword');
	}
	
	
}
submitSearch.addEventListener("click", searchRecipe);

export {submitSearch, searchElement, getRecipeByArea, getRecipeByCat, showResult, showResultByCat, searchRecipe, catButton, areaButton, result};