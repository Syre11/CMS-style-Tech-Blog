const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
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

    res.render('homepage', { posts })
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'content', 'title', 'created_at'],
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

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id.' });
      return;
    }
    
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post-comments', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'content', 'title', 'created_at'],
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

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id.' });
      return;
    }
    const posts = postData.map(post => post.get({ plain: true }));

    res.render('post-comments', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;