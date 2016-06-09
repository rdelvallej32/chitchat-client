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
  
  display.displayTopic(data.topic);
  authTopics.getRatings(data.topic.id);

};

const getNytArticleSuccess = (data) => {

  display.displayNYTArticle(data);

};

const ratingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  $('#submit-rating, #update-rating').addClass('hidden');
  let topic_id = data.rating.topic.id;
  authTopics.getRatings(topic_id);
};

const updateRatingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
};

const deleteRatingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  $('#update-rating').addClass('hidden');
  $('#submit-rating').removeClass('hidden');
  $('input[name="myrating"]').attr('checked', false);
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
