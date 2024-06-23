
// import { Request, Response } from 'express';
// import BorrowModel, { Borrow } from '../models/BorrowModel';


// // Create a user
// export const createBorrow = async (req: Request, res: Response) => {
//     try {
//         const borrow =  await BorrowModel.create(req.body);
//         await borrow.save();
//         res.status(201).json({ message: 'borrow created successfully', data: borrow });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'server error in createBorrow' });
//     }
// };

// // Delete user by ID
// export const deleteBorrowById = async (req: Request, res: Response) => {
//     try {
//       const borrow = await BorrowModel.findByIdAndDelete(req.params.id);
//       if (!borrow) {
//         return res.status(404).json({ message: 'Borrow not found' });
//       }
//       res.json({ message: 'Borrow deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
// };
// // Read all users
// export const getAllBorrows = async (req: Request, res: Response) => {
//   try {
//     const borrow = await BorrowModel.find();
//     res.json(borrow);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Read product by ID
// export const getBorrowById = async (req: Request, res: Response) => {
//   try {
//     const borrow = await BorrowModel.findById(req.params.id);
//     if (!borrow) {
//       return res.status(404).json({ message: 'Borrow not found' });
//     }
//     res.json(borrow);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
// // Read product by name
// export const getBorrowByName = async (req: Request, res: Response) => {
//   try {
//     const borrow = await BorrowModel.find({name:req.params.name});
//     if (!borrow) {
//       return res.status(404).json({ message: 'Borrow not found' });
//     }
//     res.json(borrow);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// // Read product by publish_date
// export const getBorrowByPublishDate = async (req: Request, res: Response) => {
//   try {
//     const borrow = await BorrowModel.find({publish_date:req.params.publish_date});
//     if (!borrow) {
//       return res.status(404).json({ message: 'Borrow not found' });
//     }
//     res.json(borrow);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


// // Read product by genre
// export const getBorrowByGenre = async (req: Request, res: Response) => {
//     try {
//       const borrow = await BorrowModel.find({genre:req.params.genre});
//       if (!borrow) {
//         return res.status(404).json({ message: 'Borrow not found' });
//       }
//       res.json(borrow);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };


// // Update product by ID
// export const updateBorrowById = async (req: Request, res: Response) => {
//   try {
//     const borrow = await BorrowModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!borrow) {
//       return res.status(404).json({ message: 'Borrow not found' });
//     }
//     res.json(borrow);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// export const getBorrowByJoinDate = async (req: Request, res: Response) => {
//     try {
//       const borrow = await BorrowModel.find({join_date:req.params.join_date});
//       if (!borrow) {
//         return res.status(404).json({ message: 'borrow not found' });
//       }
//       res.json(borrow);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };

//   export const getBooksByUser = async (req: Request, res: Response) => {
//     try {
//       const book = await BorrowModel.find({user:req.params.user_id});
//       if (!book) {
//         return res.status(404).json({ message: 'books not found for the specific user' });
//       }
//       res.json(book);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };


const BorrowModel = require('../models/BorrowModel');

// Create a borrow
exports.createBorrow = async (req, res) => {
  try {
    const borrow = await BorrowModel.create(req.body);
    await borrow.save();
    res.status(201).json({ message: 'Borrow created successfully', data: borrow });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete borrow by ID
exports.deleteBorrowById = async (req, res) => {
  try {
    const borrow = await BorrowModel.findByIdAndDelete(req.params.id);
    if (!borrow) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json({ message: 'Borrow deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all borrows
exports.getAllBorrows = async (req, res) => {
  try {
    const borrows = await BorrowModel.find();
    res.json(borrows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read borrow by ID
exports.getBorrowById = async (req, res) => {
  try {
    const borrow = await BorrowModel.findById(req.params.id);
    if (!borrow) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read borrow by name
exports.getBorrowByName = async (req, res) => {
  try {
    const borrow = await BorrowModel.find({ name: req.params.name });
    if (!borrow || borrow.length === 0) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read borrow by publish_date
exports.getBorrowByPublishDate = async (req, res) => {
  try {
    const borrow = await BorrowModel.find({ publish_date: req.params.publish_date });
    if (!borrow || borrow.length === 0) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read borrow by genre
exports.getBorrowByGenre = async (req, res) => {
  try {
    const borrow = await BorrowModel.find({ genre: req.params.genre });
    if (!borrow || borrow.length === 0) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update borrow by ID
exports.updateBorrowById = async (req, res) => {
  try {
    const borrow = await BorrowModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!borrow) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read borrows by join_date
exports.getBorrowByJoinDate = async (req, res) => {
  try {
    const borrow = await BorrowModel.find({ join_date: req.params.join_date });
    if (!borrow || borrow.length === 0) {
      return res.status(404).json({ message: 'Borrow not found' });
    }
    res.json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books borrowed by user
exports.getBooksByUser = async (req, res) => {
  try {
    const books = await BorrowModel.find({ user: req.params.user_id });
    if (!books || books.length === 0) {
      return res.status(404).json({ message: 'Books not found for the specific user' });
    }
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
