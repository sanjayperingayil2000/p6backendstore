const express=require('express');
const forestData=require('../controllers/forest');
const mainRouter=express.Router();

mainRouter.route("/forestDataMore").get(forestData.getforestDataMore);
mainRouter.route("/forestDataMore1").get(forestData.getforestDataMore1);

module.exports = mainRouter