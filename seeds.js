const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
    User,
    Todo,
    Blog,
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await User.deleteMany({});
    await Todo.deleteMany({});
    console.log(faker.company.companyName);
    const usersToCreate = [
        {
            username: faker.company.companyName,
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName,
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName,
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName,
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName,
            email: faker.internet.email(),
            role: 'Employee',
        },
    ];

    const users = await User.insertMany(usersToCreate);
    // Math.floor(Math.random() * users.length)
    console.log(users);

    const todosToCreate = [
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
    ];

    const todos = await Todo.insertMany(todosToCreate);
    console.log(todos);

    const blogsToCreate = [
        {
            description: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            description: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            description: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            description: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            description: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
        {
            description: faker.lorem.paragraph(),
            userId: users[Math.floor(Math.random() * users.length)]._id,
        },
    ];

    const blogs = await Blog.insertMany(blogsToCreate);
    console.log(blogs);

    process.exit(0);
};

seedDb();


/*
create a Blog model
    a blog model will belong to a user
    a blog model will have a description (text)
    
    seed database with at least 5 blogs that all belong to a user

    bonus: create an API get endpoint that gets all the blogs from the database with the user id populated
*/