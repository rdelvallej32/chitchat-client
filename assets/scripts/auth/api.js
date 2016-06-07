'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server.api + '/sign-up',
    data,

  })
  .done(success, data)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server.api + '/sign-in',
    data,

  })
  .done(success, data)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.server.api + '/sign-out/' + app.currentUser.id,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
  .fail(failure);
};

const passwordChange = (success, failure, data) => {
  //if(!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/change-password/' + app.currentUser.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  passwordChange,
  app,
};
