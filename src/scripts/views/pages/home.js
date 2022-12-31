/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import imgHero from '/src/public/images/heros/hero-image_2.jpg';
import imgAbout from '/src/public/images/heros/hero-image_1.jpg';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div id="hero" class="hero">
            <div class="hero__inner" aria-label="background" style="background-image: url(${imgHero});
            background-position: center;
            background-size: cover;">
            <div class="overlay"></div>
            <div class="hero__content">
                <div class="hero__title">
                Happiness is on your food!
                </div>
                <a href="#restaurant" class="hero__button">Go To Restaurant</a>
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
                <div class="about__pict" aria-label="Hunger Apps Image" tabindex="0" style="
                background-image: url(${imgAbout});
                background-position: center;
                background-size: cover;
                "></div>
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
