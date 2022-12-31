import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section id="restaurant" class="restaurant">
        <div class="restaurant__container">
            <h1 id="title" class="title" tabindex="0">Your Favorite Restaurant</h1>
            <div id="restaurantList" class="restaurant__list">
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantList = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
