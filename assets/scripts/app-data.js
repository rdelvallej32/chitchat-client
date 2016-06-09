'use strict';

const server = {
  api: 'http://localhost:3000',
  // api: 'https://chitchat-api.herokuapp.com',
  };

  let currentUser = {
    id: undefined,
    email: '',
    token:''
  };

module.exports = {
  server,
  currentUser
};
