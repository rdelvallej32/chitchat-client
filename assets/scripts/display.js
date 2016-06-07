'use strict';

const displayMain = function() {
  let mainTemplate = require('./templates/main.handlebars');
  $('#AskEstherContainer').append(mainTemplate());
};

module.exports = {
  displayMain
};
