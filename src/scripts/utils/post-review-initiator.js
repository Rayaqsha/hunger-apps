import RestaurantDbSource from '../data/restaurantdb-source';
import { DetailReviewTemplate } from '../views/templates/template-creator';

const PostReviewInitiator = {
  async init({
    inputName, inputReview, button, container, restaurant,
  }) {
    this._inputName = inputName;
    this._inputReview = inputReview;
    this._button = button;
    this._container = container;
    this._restaurant = restaurant;

    await this._buttonOnClick();
  },

  async _buttonOnClick() {
    this._button.addEventListener('click', async () => {
      await this._insertReview();
    });
  },

  async _insertReview() {
    const { id } = this._restaurant;
    const restaurant = await RestaurantDbSource.detailRestaurant(id);
    const content = {
      id: restaurant.id,
      name: this._inputName.value,
      review: this._inputReview.value,
    };
    const response = await RestaurantDbSource.postReview(content);

    await this._isSuccess(response);
  },

  async _isSuccess(response) {
    if (response.message === 'success') {
      this._inputName.value = '';
      this._inputReview.value = '';
      alert('success');

      await this._replaceContainer();
    } else {
      alert('failed');
    }
  },

  async _replaceContainer() {
    const { id } = this._restaurant;
    const reviews = await RestaurantDbSource.detailReview(id);
    let cards = '';

    reviews.forEach((review) => {
      cards += DetailReviewTemplate(review);
      this._container = cards;
      console.log(cards);
    });
  },
};

export default PostReviewInitiator;
