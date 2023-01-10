/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking and unliking a restaurant', ({ I }) => {
  I.see('No restaurant founded', '.restaurant__not__found');

  I.amOnPage('/#/home');

  // Liking a restaurant

  I.waitForElement('.button-card a');
  I.click(locate('.button-card a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  // Unliking a restaurant

  I.waitForElement('.button-card a');
  I.click(locate('.button-card a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('No restaurant founded', '.restaurant__not__found');
});
