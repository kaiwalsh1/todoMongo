const { Blog } = require('../model');
const {model} = require('./blogController');

module.exports = {
    getBlogs: async (req, res) => {
        try {
            const blogs = await Blog.find().populate({
                path: 'userId',
            });
            res.json(blogs);
        } catch (e) {
            res.json(e);
        }
    }
};