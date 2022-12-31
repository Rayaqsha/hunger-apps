/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  DetailContentTemplate, DetailMenuTemplate, DetailReviewTemplate, createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReviewInitiator from '../../utils/post-review-initiator';

const Detail = {
  async render() {
    return `
    <section id="detail">
        <div class="title">Detail</div>
        <article id="info">
            <div class="content__detail">
                
                </div>
            </div>
        </article>

        <article id="menu">
            <div class="content__menu">
                <div class="container__menu">
                    <div class="menu__foods">
                        <h3 class="sub__title" tabindex="0">Foods</h3>
                        
                    </div>
                    <div class="menu__drinks">
                        <h3 class="sub__title" tabindex="0">Drinks</h3>                 
                        
                    </div>
                </div>
            </div>
        </article>

        <div class="barrier"></div>

        <article id="review">
            <h2 class="title"> What people say?</h2>
            <div class="detail__review">
                <div class="container__review">
                    
                </div>
            </div>
            <div class="review__post">
                <div class="post__container">
                    <h2 class="title" tabindex="0">Post your review</h2>
                    <input id="inputName" class="post__name" type="text" placeholder="name">
                    <textarea id="inputReview" class="post__review" name="review" id="" cols="30" rows="10" placeholder="review"></textarea>
                    <button id="submitButton" class="post__button" type="submit">Submit</button>
                </div>
            </div>
        </article>
        <div id="likeButtonContainer"></div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.content__detail');
    detailContainer.innerHTML += DetailContentTemplate(restaurant);

    const foods = await RestaurantDbSource.detailFoods(url.id);
    foods.forEach((food) => {
      const foodsContainer = document.querySelector('.menu__foods');
      foodsContainer.innerHTML += DetailMenuTemplate(food);
    });

    const drinks = await RestaurantDbSource.detailDrinks(url.id);
    drinks.forEach((drink) => {
      const drinksContainer = document.querySelector('.menu__drinks');
      drinksContainer.innerHTML += DetailMenuTemplate(drink);
    });

    const reviews = await RestaurantDbSource.detailReview(url.id);
    reviews.forEach((review) => {
      const reviewContainer = document.querySelector('.container__review');
      reviewContainer.innerHTML += DetailReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
      },
    });

    PostReviewInitiator.init({
      inputName: document.querySelector('#inputName'),
      inputReview: document.querySelector('#inputReview'),
      button: document.querySelector('#submitButton'),
      container: document.querySelector('.container__review'),
      restaurant: {
        id: restaurant.id,
      },
    });
  },
};

export default Detail;
