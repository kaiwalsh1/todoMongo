const router = require('express').Router();
const { getBlogs } = require('../../../controllers/blogController');

router.route('/')
    .get(getBlogs);

module.exports = router;