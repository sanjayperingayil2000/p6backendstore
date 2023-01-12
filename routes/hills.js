const express=require('express');
const hillsData=require('../controllers/hills');
const mainRouter=express.Router();

mainRouter.route("/hillsDataMore").get(hillsData.gethillsDataMore);
mainRouter.route("/hillsDataMore1").get(hillsData.gethillsDataMore1);

module.exports = mainRouter