const router = require('express').Router();
const userRoutes = require('./user');
const todoRoutes = require('./todo');
const blogRoutes = require('./blog');

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;