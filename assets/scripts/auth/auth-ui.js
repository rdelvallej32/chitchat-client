'use strict';

const app = require('../app-data');
const authApi = require('./api');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.email = data.user.email;
  app.currentUser.id = data.user.id;
  console.log(app);
  $('#username').text(app.currentUser.email);
  $('#signed-in-menu').css('visibility', 'visible');
  $('#sign-in-modal').modal('hide'); //hide modal after sign-in
  $('.landing-page').hide();
  $('.sign-out-trigger').show();
  $('.signInTrigger').hide();
  $('.change-password-trigger').show();
  $( '#sign-in' ).each(function(){
    this.reset();
});

};

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  console.log(app);
  $('#myModal').modal('hide'); //hide modal after sign-up
  $('.signInTrigger').show();
  $( '#sign-up' ).each(function(){
    this.reset();
  });

  //invoke auto sign in
  authApi.signIn(signInSuccess, failure, app.server.signUpData);

};

const signOutSuccess = (data) => {
  console.log(data);
  app.currentUser.token = null;
  app.currentUser.email = null;
  app.currentUser.id = null;
  $('#sign-out-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('.landing-page').show();
  $('body').removeClass('modal-open');
  $('#signed-in-menu').css('visibility', 'hidden');
  $('#username').text("Username");
  $('.sign-out-trigger').hide();
  $('.change-password-trigger').hide();
  $('.signInTrigger').show();
};

const changePwSuccess = (data) => {
  console.log(data);
  $('#change-password-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('body').removeClass('modal-open');
  $( '#change-password' ).each(function(){
    this.reset();
  });
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePwSuccess,
  app,
};
