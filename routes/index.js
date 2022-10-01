/*
    Filename: index.js
	Name: Abdulkadir Musse
	Student ID: 300988847
	Date: 2022-09-30
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var global_data={
        "page_title":"Abdulkadir Musse - Web Developer"
    };
    res.render('pages/index',{global_data:global_data});
});

router.get('/services', function(req, res) {
    var global_data={
        "page_title":"Abdulkadir Musse - Services"
    };
    res.render('pages/services',{global_data:global_data});
});

router.get('/projects', function(req, res) {
    var global_data={
        "page_title":"Abdulkadir Musse - Projects"
    };
    res.render('pages/projects',{global_data:global_data});
});

router.get('/aboutme', function(req, res) {
    var global_data={
        "page_title":"Abdulkadir Musse - About Me"
    };
    res.render('pages/aboutme',{global_data:global_data});
});

router.get('/contact', function(req, res) {
    var global_data={
        "page_title":"Abdulkadir Musse - Contact"
    };
    res.render('pages/contact',{global_data:global_data});
});

module.exports = router;