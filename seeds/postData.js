const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Nice Weather!",
    "postContent": "Its been some real nice weather lately",
    "userId": 1
  },
  {
    "postTitle": "One Piece",
    "postContent": "This new One Piece chapter was crazy",
    "userId": 2
  },
  {
    "postTitle": "What da dog doin?",
    "postContent": "Just trying to figure out the age old question",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;