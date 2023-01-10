/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <section id="restaurant" class="restaurant">
        <div class="restaurant__container">
            <div class="favorite__header">
            <h1 id="title" class="title-header" tabindex="0">Your Favorite Restaurant</h1>
            <div class="search__container">
                <input id="query" class="search-bar" type="text" placeholder="Search...">
                <button class="search-button"><i class="bi bi-search"></i></button>
            </div>
            </div>
            <div id="restaurantList" class="restaurant__list">
            </div>
        </div>
    </section>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = '<div class="restaurant__not__found">No restaurant founded</div>';
    }

    document.getElementById('restaurantList').innerHTML = html;

    document.getElementById('restaurantList').dispatchEvent(new Event('restaurants:updated'));
    console.log(restaurants);
  }
}

export default FavoriteRestaurantSearchView;
