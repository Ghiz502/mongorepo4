const express = require('express');
const router = express.Router();
//portfolio page
router.get('/portfolio1',(req,res)=> res.render('portfolio1'));
//Missions
router.get('/miss',(req,res)=> res.render('miss'));
//tradinghistory
router.get('/tradinghistory',(req,res)=> res.render('tradinghistory'));
//Analysis
router.get('/analysis',(req,res)=> res.render('analysis'));




router.get('/',(req,res) => res.render('trade2'));
module.exports = router;
