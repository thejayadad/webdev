const searchButton = document.getElementById("searchButton");
const ingredientInput = document.getElementById("ingredientInput");
const recipeList = document.getElementById("recipeList");

searchButton.addEventListener("click", searchRecipes);

async function searchRecipes() {
    recipeList.innerHTML = ""; // Clear previous results

    const ingredient = ingredientInput.value.trim();

    if (ingredient === "") {
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        if (data.meals) {
            data.meals.forEach(meal => {
                const recipeItem = document.createElement("div");
                recipeItem.classList.add("recipe-item");
                recipeItem.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h3>${meal.strMeal}</h3>
                `;
                recipeList.appendChild(recipeItem);
            });
        } else {
            recipeList.innerHTML = "No recipes found with the given ingredient.";
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
        recipeList.innerHTML = "An error occurred while fetching recipes.";
    }
}
