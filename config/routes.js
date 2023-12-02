const express = require('express')
const router = express.Router()
const controller = require('../controller/feedController')


router.get('/', controller.feedRedirect);

router.get('/feed', controller.getFeed);

router.post('/feed',controller.createFeed);

router.get('/feeds/:id', controller.getFeedById);

router.delete('/feeds/:id', controller.deleteFeedById);

module.exports = router;