'use strict';

const app = require('../app-data');
const authApi = require('./api');
const display = require('../display');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  $('#signin-fail2').removeClass('hidden').fadeOut(2000, function(){
    $('#signin-fail2').addClass('hidden').show();
  });
  console.error(error);
  $('#signin-fail').removeClass('hidden').fadeOut(2000, function(){
    $('#signin-fail').addClass('hidden').show();
  });
};

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.email = data.user.email;
  app.currentUser.id = data.user.id;
  $('#username').text(app.currentUser.email);
  $('#signed-in-menu').css('visibility', 'visible');
  $('#sign-in-modal').modal('hide'); //hide modal after sign-in
  $('.landing-page').hide();
  $('.sign-out-trigger').show();
  $('.signInTrigger').hide();
  $('.change-password-trigger').show();
  $('.loggedout-hide').show();
  display.displayMain();
  $( '#sign-in' ).each(function(){
    this.reset();
});
$('#signin-success').removeClass('hidden').fadeOut(2000, function(){
  $('#signin-success').addClass('hidden').show();
});

};

const signUpSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.email = data.user.email;
  app.currentUser.id = data.user.id;
  $('#myModal').modal('hide'); //hide modal after sign-up
  $('.signInTrigger').show();
  $( '#sign-up' ).each(function(){
    this.reset();
  });
  //invoke auto sign in
  // authApi.signIn(signInSuccess, failure, app.currentUser.credentials);
  $('#signup-success').removeClass('hidden').fadeOut(2000, function(){
    $('#signup-success').addClass('hidden').show();
  });

};

const signOutSuccess = (data) => {
  app.currentUser.token = null;
  app.currentUser.email = null;
  app.currentUser.id = null;
  $('#sign-out-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('.landing-page').show();
  $('body').removeClass('modal-open');
  $('#username').text("Username");
  $('#AskEstherContainer').html('');
  $('#NYTContainer').html('');
  $('.sign-out-trigger').hide();
  $('.change-password-trigger').hide();
  $('.signInTrigger').show();
  $('.loggedout-hide').hide();
};

const changePwSuccess = (data) => {
  $('#change-password-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('body').removeClass('modal-open');
  $( '#change-password' ).each(function(){
    this.reset();
  });
  $('#changepass-success').removeClass('hidden').fadeOut(2000, function(){
    $('#changepass-success').addClass('hidden').show();
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
