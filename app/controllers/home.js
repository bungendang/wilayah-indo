const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Province = mongoose.model('Province');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/provinces', (req, res, next) => {
  Province.find({}).select('-_id').exec((err, provinces) => {
    if (err) return next(err);
    res.json({
    	results: provinces
    })
  });
});
