const { Comment } = require('../models');

const commentData = [
  {
    content: 'Test Comment 1. from user 1',
    user_id: '1',
    post_id: '1'
  },
  {
    content: 'Test Comment 2. from user 2',
    user_id: '2',
    post_id: '2'
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
