const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    userId: {
        // ObjectId type
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;


/*
    create a route for getting all todos
    create a route for creating a todo
    create a route for getting a todo by its id
    create a route for updating a todo by its id
    create a route for deleting a todo by its id                                                                                                                     
* */