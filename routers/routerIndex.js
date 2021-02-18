const express = require('express');
const router = express.Router();
const generalController = require('../controllers/controllerIndex');
const detailsController = require('../controllers/detailsIndex');
const db = require('../config/database');
const Notas = require('../models/notas');

router.get('/', generalController.home);
router.get('/details', detailsController.details);
router.post('/update', detailsController.update);
router.post('/', generalController.post);
router.post('/delete', generalController.delete);

module.exports = router;