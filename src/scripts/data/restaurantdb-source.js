import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async homeRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detailFoods(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const restaurant = await responseJson.restaurant;
    const menu = await restaurant.menus;
    const food = await menu.foods;
    return food;
  }

  static async detailDrinks(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const restaurant = await responseJson.restaurant;
    const menu = await restaurant.menus;
    const drink = await menu.drinks;
    return drink;
  }

  static async detailReview(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    const restaurant = await responseJson.restaurant;
    const review = await restaurant.customerReviews;
    return review;
  }

  static async postReview(content) {
    return fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  }
}

export default RestaurantDbSource;
