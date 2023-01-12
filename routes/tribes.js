const express=require('express');
const tribesData=require('../controllers/tribes');
const mainRouter=express.Router();

mainRouter.route("/tribesDataMore").get(tribesData.gettribesDataMore);
mainRouter.route("/tribesDataMore1").get(tribesData.gettribesDataMore1);

module.exports = mainRouter