const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: Comment,
         attributes: ['id', 'content', 'user_id', 'post_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    const posts = postData.map(post => post.get({ plain: true }));

    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
         attributes: ['id', 'content', 'user_id', 'post_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    });
    if (!postData) {
      res.status(404).json({ message: 'No post found with that id.' });
      return;
    }
    const posts = postData.get({ plain: true });

    res.render('edit-post', { posts, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', (req, res) => {
  res.render('new-post');
});

module.exports = router;