const {isEmail} = require('validator');
const {User} = require('../model');

module.exports = {
	createUser: async (req, res) => {
		const {username, email, role, powerLevel} = req.body;
		if (!isEmail(email)) {
			return res.status(401).json({error: 'Email must be a valid email address'});
		}
		try {
			const newUser = await User.create({
				username,
				email,
				role,
				powerLevel,
			});
			res.json(newUser);
		} catch (e) {
			res.json(e);
		}
	},
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find({}, '-role -powerLevel');
			res.json(users);
		} catch (e) {
			res.json(e);
		}
	},
	getUserById: async (req, res) => {
		const {userId} = req.params;
		try {
			const user = await User.findById(userId, '-role -powerLevel');
			res.json(user);
		} catch (e) {
			res.json(e);
		}
	},
	updateUserById: async (req, res) => {
		const {userId} = req.params;
		try {
			const updatedUser = await User.findByIdAndUpdate(
				userId,
				{...req.body},
				{
					new: true,
					runValidators: true,
				}
			);
			res.json(updatedUser);
		} catch (e) {
			res.json(e);
		}
	},
	deleteUserById: async (req, res) => {
		const { userId } = req.params;
		try {
			const deletedUser = await User.findByIdAndDelete(userId);
			res.json(deletedUser);
		} catch (e) {
			res.json(e);
		}
	}
}