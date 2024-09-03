import User from '../models/user.model.js';

const getUsers = async(req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send(error);
    
  }

};

const postUser = async(req, res) => {
  const newUser = await User.create(req.body);
  console.log(newUser);
  
  res.status(201).json({message: "user created successfully"});
}


export { getUsers, postUser };
