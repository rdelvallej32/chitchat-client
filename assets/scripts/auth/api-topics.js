'use strict';

const app = require('../app-data');
const display = require('../display');

const getRandomTopic = (success, failure) => {
  $.ajax({
    method: "GET",
    url: app.server.api + '/random-show',
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
  .fail(failure);
};

const getNytArticle = (success, failure) => {
  $.ajax({
    method: "GET",
    url: app.server.api + '/show-nyt',
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
  .fail(failure);
};


const getRatings = function(topicID){
  $.ajax({
    // method: 'GET',
    url: app.server.api + "/ratings/",
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(function(data){
    display.displayRatings(data.ratings, topicID);
  });
};

const createRating = (success, failure, score, topic_id) => {
  $.ajax({
    method: 'POST',
    url: app.server.api + '/ratings/',
    headers: {
      Authorization: 'Token token=' + app.currentUser.token,
    },
    data: {
      rating: {
        score: score,
        user_id: app.currentUser.id,
        topic_id: topic_id,
      },
    },
  }).done(success)
  .fail(failure);
};

module.exports = {
  getRandomTopic,
  getNytArticle,
  getRatings,
  createRating,
  app,
};
