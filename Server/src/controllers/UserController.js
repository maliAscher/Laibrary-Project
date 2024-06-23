// // controllers/ProductController.ts

// import { Request, Response } from 'express';
// import UserModel, { User } from '../models/UserModel';
// import BookModel from '../models/BookModel';


// // Create a product
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Read all products
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await UserModel.find();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Read product by ID
// export const getUserById = async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Update product by ID
// export const updateUserById = async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Delete product by ID
// export const deleteUserById = async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Read product by join date
// export const getUserByJoinDate = async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.find({join_date:req.params.join_date});
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// ///return all books by user
// export const getBooksByUser = async (req: Request, res: Response) => {
//   try {
//     const user = await UserModel.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     const booksByUser=user!.book
//     if (!booksByUser) {
//       return res.status(404).json({ message: 'booksByUser not found' });
//     }
//     res.json(booksByUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


const UserModel = require('../models/UserModel');

// Create a user
exports.createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update user by ID
exports.updateUserById = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read user by join date
exports.getUserByJoinDate = async (req, res) => {
  try {
    const user = await UserModel.find({ join_date: req.params.join_date });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Return all books by user
exports.getBooksByUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const booksByUser = user.book;
    if (!booksByUser) {
      return res.status(404).json({ message: 'Books by user not found' });
    }
    res.json(booksByUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
