/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import CONFIG from '../../globals/config';
import userPhoto from '/src/public/images/user.png';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
    <div class="card-header" tabindex="0" aria-label="${restaurant.name}" style="background-image: url('${CONFIG.MEDIUM_BASE_IMAGE_URL + restaurant.pictureId}');">
        <div class="label-header" tabindex="0">Kota ${restaurant.city}</div>
        <div class="rating" tabindex="0"><i class="bi bi-star-fill" aria-label="rating"></i> ${restaurant.rating}</div>
    </div>
    <div class="card-body">
        <h2 class="card-title" tabindex="0">${restaurant.name}</h2>
        <p class="card-desc" tabindex="0">
        ${restaurant.description.slice(0, 300)}
        </p>
        
        <div class="button-card">
          <a href="/#/detail/${restaurant.id}"><button class="card-button">See Detail</button></a>
        </div>
    </div>
</div>
`;

const DetailContentTemplate = (restaurant) => `
<img class="detail__poster" src="${CONFIG.MEDIUM_BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}.image" />
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
              <img class="user__photo" src="${userPhoto}" alt="user-photo">
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="bi bi-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="bi bi-heart-fill" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  DetailContentTemplate,
  DetailMenuTemplate,
  DetailReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
