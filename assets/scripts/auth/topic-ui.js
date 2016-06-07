'use strict';

const app = require('../app-data');
const authTopics = require('./api-topics');
const display = require('../display');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getTopicSuccess = (data) => {
  console.log(data);

  display.displayTopic(data);
  authTopics.getRatings(data.id);

};

const getNytArticleSuccess = (data) => {
  console.log(data);

  display.displayNYTArticle(data);

};

const ratingSuccess = (data) => {
  debugger;
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  $('#submit-rating, #update-rating').addClass('hidden');
  console.log(data);
};

module.exports = {
  failure,
  success,
  getTopicSuccess,
  getNytArticleSuccess,
  ratingSuccess,
  app,
};
