const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Province = mongoose.model('Province');
const City = mongoose.model('City');
const District = mongoose.model('District');

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

router.get('/province/:id', (req, res, next) => {
	// console.log(req.params.id)
	var id = req.params.id
	console.log(id)
	Province.findOne({"id":id}).select('-_id').exec((err, provinces) => {
		if (err) return next(err);
		res.json({
			results: provinces
		})
	});
});

router.get('/cities', (req, res, next) => {
	var params = {}
	var query =  req.query
	var prov_id = parseInt(query.province_id) 
	console.log(prov_id)
	if (query.province_id && typeof prov_id == 'number') {
		params = {province_id: prov_id}
	} else {

	}
	City.find(params).select('-_id').exec((err,cities)=>{
		if (err) return next(err);
		res.json({
			results: cities
		})
	})
});


router.get('/district', (req, res, next) => {
	var params = {}
	var query =  req.query
	var reg_id = query.city_id
	// console.log(prov_id)
	if (query.city_id) {
		params = {regency_id: reg_id}
	} else {

	}
	District.find(params).select('-_id').exec((err,districts)=>{
		if (err) return next(err);
		res.json({
			results: districts
		})
	})
});