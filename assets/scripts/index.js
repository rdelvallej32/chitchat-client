'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/auth-events.js');
const topicEvents = require('./auth/topic-events.js');

$(() => {
  authEvents.authHandlers();
  topicEvents.topicHandlers();
  $('.sign-out-trigger').hide();
  $('.change-password-trigger').hide();
  $('.loggedout-hide').hide();
});
