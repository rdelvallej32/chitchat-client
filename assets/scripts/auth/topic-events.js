'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const topicApi = require('./api-topics');
const topicUi = require('./topic-ui');

const topicHandlers = function() {
  //-----------Authentication Events-----------//
  $('#nyt').on('click', function(event){
    event.preventDefault();
    topicApi.getRandomTopic(topicUi.getTopicSuccess, topicUi.failure);
  });
  };

module.exports = {
topicHandlers,
};
