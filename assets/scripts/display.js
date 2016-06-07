'use strict';

const displayMain = function() {
  let mainTemplate = require('./templates/main.handlebars');
  $('#AskEstherContainer').html(mainTemplate());
};

const displayTopic = function(topics) {
  let topicTemplate = require('./templates/topic.handlebars');
  $('#AskEstherContainer').html(topicTemplate({
    topics: topics
  }));
};

module.exports = {
  displayMain,
  displayTopic
};
