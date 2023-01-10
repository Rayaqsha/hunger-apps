/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurant', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurant have been liked', () => {
    it('should ask for the favorite restaurant', () => {
      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
      expect(favoriteRestaurant.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurant have been liked', (done) => {
      document.getElementById('restaurantList').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant__not__found').length).toEqual(1);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurant.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });

  describe('When favorite restaurant exist', () => {
    it('should show the restaurant', (done) => {
      document.getElementById('restaurantList').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(2);
        done();
      });
      const favoriteRestaurant = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurant.getAllRestaurant.and.returnValues([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah restaurant A',
        },
        {
          id: 22,
          name: 'B',
          reating: 4,
          description: 'Sebuah restaurant B',
        },
      ]);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurant,
      });
    });
  });
});
