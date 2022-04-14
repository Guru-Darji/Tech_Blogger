const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Nice Weather!",
    "postContent": "Its been some nice wether recently",
    "userId": 1
  },
  {
    "postTitle": "One Piece",
    "postContent": "This new One Piece chapter was crazt",
    "userId": 2
  },
  {
    "postTitle": "What da dog doin?",
    "postContent": "Just trying to figure out th eage old question",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;