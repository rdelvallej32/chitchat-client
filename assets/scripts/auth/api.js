'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server + '/sign-up',
    data,

  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server + '/sign-in',
    data,

  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.server + '/sign-out/' + app.currentUser.id,
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
    url: app.server + '/change-password/' + app.currentUser.id,
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
