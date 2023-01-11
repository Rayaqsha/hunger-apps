/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div id="hero" class="hero">
            <div class="hero__inner">
            <div class="background__hero">
              <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
                <img class="image__hero" src="./images/hero-image_2-large.jpg" 
                    alt="jumbotron background poster">
              </picture>
              <div class="hero__content">
                  <div class="hero__title">
                  Happiness is on your food!
                  </div>
                  <a href="#restaurant" class="hero__button">Go To Restaurant</a>
              </div>
            </div>
            </div>
        </div>

        <section id="restaurant" class="restaurant">
            <div class="restaurant__container">
                <h1 id="title" class="title" tabindex="0">Explore Restaurant</h1>
                <div id="restaurantList" class="restaurant__list">
                </div>
            </div>
        </section>

        <section id="about">
            <div class="barrier"></div>
            <div class="about__content">
                <div class="about__pict">
                <picture>
                  <source media="(max-width: 600px)" srcset="./images/hero-image_1-small.jpg">
                  <img class="image__about" src="./images/hero-image_1-large.jpg" 
                      alt="about background poster">
                </picture>
                </div>
                <div class="about__text">
                <h2 class="about__title" tabindex="0">Hunger Apps</h2>
                <p class="about__desc" tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestiae saepe necessitatibus ullam nobis mollitia quisquam expedita repellendus consequuntur perferendis. <br><br>
                Jl. Cikutra, Kota Bandung <br>
                +62 878 8734 8391</p    >
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.homeRestaurant();
    const restaurantList = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
