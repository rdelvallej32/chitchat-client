'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const topicApi = require('./api-topics');
const topicUi = require('./topic-ui');

const topicHandlers = function() {
  //-----------Topic Events-----------//
  $('#rand-topic').on('click', function(event){
    event.preventDefault();
    topicApi.getRandomTopic(topicUi.getTopicSuccess, topicUi.failure);
  });

  $('#nyt-article').on('click', function(event){
    event.preventDefault();
    topicApi.getNytArticle(topicUi.getNytArticleSuccess, topicUi.failure);
  });

  $('#submit-rating').on('click', function (event) {
    let score = $('input[name="myrating"]:checked').val();
    let topic_id = $(".topic").data("id");
    console.log(topic_id);
    console.log(score);
    event.preventDefault();
    topicApi.createRating(topicUi.ratingSuccess, topicUi.failure, score, topic_id);
  });

  $('#update-rating').on('click', function (event) {
    let score = $('input[name="myrating"]:checked').val();
    let id = $(".rating").data("id");
    console.log(id);
    console.log(score);
    event.preventDefault();
    topicApi.updateRating(topicUi.updateRatingSuccess, topicUi.failure, score, id);
  });

  $('#delete-rating').on('click', function (event) {
    let score = $('input[name="myrating"]:checked').val();
    debugger;
    let id = $(".rating").data("id");
    console.log(id);
    console.log(score);
    event.preventDefault();
    topicApi.deleteRating(topicUi.deleteRatingSuccess, topicUi.failure, id);
  });

  };

module.exports = {
topicHandlers,
};
