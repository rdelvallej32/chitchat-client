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

const displayNYTArticle = function(articles) {
  let nytTemplate = require('./templates/nyt-article.handlebars');
  $('#NYTContainer').html(nytTemplate({
    articles: articles
  }));
};

module.exports = {
  displayMain,
  displayTopic,
  displayNYTArticle
};
