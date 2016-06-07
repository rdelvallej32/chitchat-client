'use strict';

const app = require('../app-data');
const authTopics = require('./api-topics');
const display = require('../display');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const getTopicSuccess = (data) => {
  console.log(data);

  display.displayTopic(data);

};

module.exports = {
  failure,
  success,
  getTopicSuccess,
  app,
};
