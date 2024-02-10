const User = require("../models/User");


exports.createUser = async (req, res) => {
    try {
        const { username, password, userId } = req.body;

        const findUser = await User.findOne({ username });
        if (findUser) {
            res.status(400).json({
                error: "User already exists"
            })
        }

        await User.create({ username, password, userId })

        res.status(200).json({
            message: "User created successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: "User creation failed"
        })
    }

}