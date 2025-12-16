import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 
import User from '../Models/userModel.js'; 

const registerUser = async (req, res) => {
  const { username, email, password, avatar } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: `${username} already exists` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
      avatar: avatar || null,
    });

    // Create user response object
    const userResponse = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    res
      .status(201)
      .json({ message: "User registered successfully", data: userResponse });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
};

export default registerUser;