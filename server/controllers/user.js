import User from "./../models/User.js";
import bcrypt from "bcrypt";

const postSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.json({
      message: "User created successfully",
      data: savedUser,
      success: true,
    });
  } catch (err) {
    res.json({
      message: "Error creating user",
      data: err.message,
      success: false,
    });
  }
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.json({
        message: "User not found",
        data: null,
        success: false,
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.json({
        message: "Invalid password",
        data: null,
        success: false,
      });
    }
    res.json({
      message: "User logged in successfully",
      data: user,
      success: true,
    });
  } catch (err) {
    res.json({
      message: "Error logging in user",
      data: err.message,
      success: false,
    });
  }
};

export {postLogin , postSignup}
