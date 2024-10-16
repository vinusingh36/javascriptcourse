
import 'core-js/stable';
import 'regenerator-runtime/runtime'

import * as modal from './modal.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import paginationView from './views/paginationView.js';



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}


const controlRecipe = async () => {

  try {

    //1. getting recipe
    recipeView.renderSpinner();
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    //Loading Recipe
    await modal.loadRecipe(id);
    //2. Rendering recipe

    recipeView.render(modal.state.recipe)


  } catch (error) {
    recipeView.renderError()
  }
}

const controlSearchResults = async function () {
  try {

    resultsView.renderSpinner();
    //GetSearch Query
    const query = searchView.getQuery();
    if (!query) return;

    //2) Load Search Result
    await modal.loadSearchResults(query);

    //3)Render Data
    resultsView.render(modal.getSearchResultsPage());

    //4) pagination
    paginationView.render(modal.state.search);

  } catch (error) {
    console.log(error);
  }
}

const controlPagination = function (gotoPage) {
  //3)Render new results
  resultsView.render(modal.getSearchResultsPage(gotoPage));

  //4)Render new pagination btns
  paginationView.render(modal.state.search);


}

const controlServings = function (newServings) {
  //Update the recipe servings(in state)
  modal.updateServings(newServings);

  //Update the  recipe view as well
  recipeView.render(modal.state.recipe);
}


const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.appHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

}

init();

