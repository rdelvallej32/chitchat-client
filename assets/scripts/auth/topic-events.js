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
  };

module.exports = {
topicHandlers,
};
