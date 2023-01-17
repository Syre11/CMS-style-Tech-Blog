const { Post } = require('../models');

const postData = [
  {
    title: 'Test Post 1, from user 1',
    content: 'This is a test of the current posts',
    user_id: '1'
  },
  {
    title: 'Test Post 1, from user 2',
    content: 'This is a test of the current posts',
    user_id: '2'
  },

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
