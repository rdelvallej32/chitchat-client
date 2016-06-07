'use strict';

const app = require('./app-data.js');

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

const displayRatings = function(ratings, topicID) {
  $('#submit-rating, #update-rating').addClass('hidden');
  let userRating = null;
  let ratingID = null;
  let topicRatings = [];
  for (let i = 0; i < ratings.length; i++) {
    if (!!app.currentUser && ratings[i].topic.id === topicID && ratings[i].user.email === app.currentUser.email) {
      userRating = '.star-' + ratings[i].score;
      ratingID = ratings[i].id;
    }
    if (ratings[i].topic.id === topicID) {
      topicRatings.push(ratings[i].score);
    }
  }
  if(userRating !== null) {
    $(userRating).prop('checked', true);
    $('#update-rating').removeClass('hidden');
    $('.rating').data('id', ratingID);
  }
  else {
    $('.rating').children().prop('checked', false);
    $('#submit-rating').removeClass('hidden');
  }
};

module.exports = {
  app,
  displayMain,
  displayTopic,
  displayRatings,
  displayNYTArticle
};
