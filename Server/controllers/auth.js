const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
    try {
        const { username, password, userId } = req.body;

        const findUser = await User.findOne({ username });
        if (findUser) {
            res.status(400).json({
                error: "User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, password: hashedPassword, userId })
        const user = await newUser.save();
        res.status(200).json({
            user,
            message: "User created successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "User creation failed"
        })
    }

}