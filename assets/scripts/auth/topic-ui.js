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
  console.log(data.topic);
  console.log(data.topic.id);

  display.displayTopic(data.topic);
  authTopics.getRatings(data.topic.id);

};

const getNytArticleSuccess = (data) => {
  console.log(data);

  display.displayNYTArticle(data);

};

const ratingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  $('#submit-rating, #update-rating').addClass('hidden');
  console.log(data);
  let topic_id = data.rating.topic.id;
  authTopics.getRatings(topic_id);
};

const updateRatingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  console.log(data);
};

const deleteRatingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  console.log(data);
};

module.exports = {
  failure,
  success,
  getTopicSuccess,
  getNytArticleSuccess,
  updateRatingSuccess,
  deleteRatingSuccess,
  ratingSuccess,
  app,
};
