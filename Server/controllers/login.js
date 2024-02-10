const User = require("../models/User");


exports.login = async (req, res) => {
    const { email, password, id } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser) {
        res.status(400).json({
            error: "User already exists"
        })
    }

    await User.create({ email, password, userId: id })

    res.status(200).json({
        message: "User created successfully"
    })
}