'use strict';

const app = require('../app-data');

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

module.exports = {
  getRandomTopic,
  getNytArticle,
  app,
};
