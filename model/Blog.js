const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
    likeIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like',
        }
    ],
    description: String,
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;



/*
create a Blog model
    a blog model will belong to a user
    a blog model will have a description (text)
    
    seed database with at least 5 blogs that all belong to a user

    bonus: create an API get endpoint that gets all the blogs from the 
    database with the user id populated
*/