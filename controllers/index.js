const express = require('express');
const router = express.Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);

module.exports = router;