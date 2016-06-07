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
    debugger;
    let score = $('input[name="myrating"]:checked').val();
    let topic_id = $(".topic").data("id");
    console.log(topic_id);
    console.log(score);
    event.preventDefault();
    topicApi.createRating(topicUi.ratingSuccess, topicUi.failure, score, topic_id);
  });

  };

module.exports = {
topicHandlers,
};
