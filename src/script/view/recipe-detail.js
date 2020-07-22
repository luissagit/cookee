import { randomRecipe, baseUrl} from "./random-recipe.js";

const recipes = document.querySelector("random-element");
const listResult = document.getElementById("listResult");
const recipeDetail = document.getElementById("recipeDetail");

recipes.addEventListener('click', event => {
	const recipes = event.path.find(item => {
		if (item.classList) {
			return item.classList.contains('toDetail');
		} else {
			return false;
		}
	});

	if (recipes) {
		const mealID = recipes.getAttribute('meal-id');
		getMealById(mealID);
		console.log(mealID);
	}
});

listResult.addEventListener('click', event => {
	const recipes = event.path.find(item => {
		if (item.classList) {
			return item.classList.contains('toDetail');
		} else {
			return false;
		}
	});

	if (recipes) {
		const mealID = recipes.getAttribute('meal-id');
		getMealById(mealID);
		console.log(mealID);
	}
});

function getMealById(mealID) {
	listResult.innerHTML = '';
	recipes.innerHTML = '';
	const randomRecipe = document.querySelector("random-element");
	randomRecipe.innerHTML = '';
	const listArea2 = document.querySelector("#listArea");
	listArea2.innerHTML ='';
	const listCat = document.querySelector("#listCat");
	listCat.innerHTML = '';
	
	
	fetch(`${baseUrl}lookup.php?i=${mealID}`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			const meal = responseJson.meals[0];
			showDetail(meal);
		})
		.catch(error => {
			showResponseMessage(error);
		})
}

function showDetail(meal) {
	
	
	const ingredients = [];

	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strIngredient${i}`]} : ${meal[`strMeasure${i}`]}`
			);
		} else {
			break;
		}
	}
	
	
	recipeDetail.innerHTML = `
		<div id="detailThumb">
			<img src="${meal.strMealThumb}"></img>
		</div>
		<div id="detailTitle">
			<h2>${meal.strMeal}</h2>
		</div>
		<div id="detailInfo">
			<button type="button" cat-id="${meal.strCategory}" class="button-cat"><span class="fa fa-hashtag"></span> ${meal.strCategory}</button>
			<button type="button" origin="${meal.strArea}" class="button-area"><span class="fa fa-map-marker"></span> ${meal.strArea}</button>
		</div>
		<div id="detailInstruction"
			<p>${meal.strInstructions}</p>
		</div>
		<div id="detailIIngredient">
			<h4>Ingredients : </h4>
				${ingredients.map(ingredient => `<div id="ing">${ingredient}</div>`).join('')}
		</div>
		<div id="detailVideo">
			<h4>Feeling confused? Watch the tutorial below</h4>
			<div id="video">
				<iframe width="360" height="240"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>
	`;
	
}

export { getMealById, showDetail};