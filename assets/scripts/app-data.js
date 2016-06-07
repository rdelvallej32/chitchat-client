'use strict';

const server = {
  api: 'http://localhost:3000',
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
