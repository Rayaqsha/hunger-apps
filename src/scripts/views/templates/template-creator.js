/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';
// import userPhoto from '../../../public/images/user.png';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
    <div class="card-header">
    <div class="image-header__card">
      <picture>
        <source media="(max-width: 600px)" data-srcset="${CONFIG.SMALL_BASE_IMAGE_URL + restaurant.pictureId}">
        <img class="lazyload" data-src="${CONFIG.MEDIUM_BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name} picture">
      </picture>
      <div class="label-header" tabindex="0">Kota ${restaurant.city || '-'}</div>
      <div class="rating" tabindex="0"><i class="bi bi-star-fill" aria-label="rating"></i> ${restaurant.rating || '-'}</div>
      </div>
    </div>
    <div class="card-body">
        <h2 class="card-title" tabindex="0">${restaurant.name || '-'}</h2>
        <p class="card-desc" tabindex="0">
        ${restaurant.description ? restaurant.description.slice(0, 300) : '-'}
        </p>
        
        <div class="button-card">
          <a href="/#/detail/${restaurant.id}"><button class="card-button">See Detail</button></a>
        </div>
    </div>
</div>
`;

const DetailContentTemplate = (restaurant) => `
<picture>
  <source media="(max-width: 800px)" srcset="${CONFIG.MEDIUM_BASE_IMAGE_URL + restaurant.pictureId}">
  <img class="detail__poster lazyload" data-src="${CONFIG.LARGE_BASE_IMAGE_URL + restaurant.pictureId}"
       alt="${restaurant.name} picture">
</picture>
<div class="detail__info">
    <h2 id="title" class="detail__name" tabindex="0">${restaurant.name}</h2>
    <p class="info__item" tabindex="0"><strong>Rating: </strong>⭐️${restaurant.rating}</p>
    <p class="info__item" tabindex="0"><strong>Address: </strong>${restaurant.address}, Kota ${restaurant.city}</p>
    <p class="info__item" tabindex="0"><strong>Categories: </strong>Italia, Modern</p>
    <p class="info__item" tabindex="0"><strong>description: </strong> <br> ${restaurant.description}</p>
</div>
`;

const DetailMenuTemplate = (menu) => `
<p class="info__item" tabindex="0">${menu.name}</p>
`;

const DetailReviewTemplate = (reviews) => `
<div class="review__card">
  <div class="card__container">
      <div class="card__header">
          <div class="photo">
              <div class="user__photo" aria-label="user-photo"></div>
          </div>
          <div class="profile">
              <h2 class="review__name" tabindex="0">${reviews.name}</h2>
              <p class="review__date" tabindex="0">published on ${reviews.date}</p>
              <p class="review__content" tabindex="0">${reviews.review}</p>
          </div>
      </div>
  </div>
</div>

`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  DetailContentTemplate,
  DetailMenuTemplate,
  DetailReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
