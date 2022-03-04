const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
	Blog,
	Like,
	User,
	Todo
} = require('./model');

const seedDb = async () => {
	await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
	await Blog.deleteMany({});
	await Like.deleteMany({});
	await Todo.deleteMany({});
	await User.deleteMany({});

	const usersToCreate = [
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Admin',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Admin',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Admin',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Admin',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
	];

	const users = await User.insertMany(usersToCreate);

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
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
	];

	const todos = await Todo.insertMany(todosToCreate);


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
	];

	const blogs = await Blog.insertMany(blogsToCreate);

	const likesToCreate = [
		{
			userId: users[0]._id,
		},
		{
			userId: users[0]._id,
		},
		{
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			userId: users[Math.floor(Math.random() * users.length)]._id,
		}
	];

	const [like1, like2] = await Like.insertMany(likesToCreate);
	const firstBlog = blogs[0];


// -1 descending (from highest to lowest)
// 1 ascending (from lowest to highest) 
// .limit()
// .skip() - skip the first one
// limit + skip - used for pagination
	const blogs = await Blog.find({}).sort({ description: -1 }).limit(3).skip(1);
	console.log(blogs);

	// How to add a like
	// // const updatedBlog = await Blog.findByIdAndUpdate(
	// // 	firstBlog._id,
	// // 	{
	// // 		$addToSet: {
	// // 			likeIds: [ like1, like2 ]
	// // 		},
	// // 	},
	// // 	{
	// // 		new: true,
	// // 	}
	// // ).populate({
	// // 	path: 'likeIds',
	// // 	populate: 'userId'
	// // });

	// // console.log('After adding', updatedBlog.likeIds);

	// const updatedBlogPartTwo = await Blog.findByIdAndUpdate(
	// 	firstBlog._id,
	// 	{
	// 		$pull: {
	// 			likeIds: like1._id,
	// 		},
	// 	},
	// 	{
	// 		new: true,
	// 	}
	// ).populate([
	// 	{
	// 		path: 'likeIds',
	// 		populate: 'userId',
	// 	},
	// 	{
	// 		path: 'userId',
	// 		populate: 'petIds',
	// 	}
	// ]);

	// console.log(updatedBlogPartTwo)
	// // console.log('After removing', updatedBlogPartTwo.likeIds);
	// // const employees = await User.findByRole('Employee');
	// // employees.forEach(employee => employee.greeting());

	process.exit(0);
};

seedDb();
/*
	Create a Blog model
	a blog model will belong to a user
  a blog model will have a description which is a text
	Seed your database with at least 5 blogs that all belong to a user
  Create an API GET endpoint that gets all of the blogs from the database with the userId populated
* */