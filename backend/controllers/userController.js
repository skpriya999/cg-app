import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const login = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  console.log(
    "Exec login API User Name : " + userName + ", password: " + password
  );
  const users = await User.find();
  console.log("User Count" + users.length);
  const authUser = users.filter(
    (eu) => eu.userName === userName && eu.password === password
  );

  console.log("Auth User : " + authUser);

  if (authUser) {
    res.json(authUser);
  } else {
    res.status(401);
    throw new Error("Invalid Credentails");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const create = asyncHandler(async (req, res) => {
  console.log("Req Body :--> " + req.body);
  const { name, userName, password, email, contactNo, isAdmin, role } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    userName,
    email,
    password,
    role,
    isAdmin,
    contactNo,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { login, create };
