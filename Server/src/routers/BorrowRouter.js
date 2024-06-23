// import express from 'express';
// import * as BorrowController from '../controllers/BorrowController';

// const router = express.Router();

// router.post('/', BorrowController.createBorrow);
// router.get('/', BorrowController.getAllBorrows);
// router.get('/:id', BorrowController.getBorrowByGenre);
// router.get('/:id', BorrowController.deleteBorrowById);
// router.get('/:id', BorrowController.getBorrowByJoinDate);
// router.put('/:id', BorrowController.updateBorrowById);
// router.delete('/:id', BorrowController.deleteBorrowById);
// router.delete('/:id', BorrowController.getBorrowByName);
// router.delete('/:id', BorrowController.getBorrowByPublishDate);


// export default router;

const express = require('express');
const BorrowController = require('../controllers/BorrowController');

const router = express.Router();

router.post('/', BorrowController.createBorrow);
router.get('/', BorrowController.getAllBorrows);
router.get('/:id', BorrowController.getBorrowByGenre);
router.get('/:id', BorrowController.deleteBorrowById);
router.get('/:id', BorrowController.getBorrowByJoinDate);
router.put('/:id', BorrowController.updateBorrowById);
router.delete('/:id', BorrowController.deleteBorrowById);
router.delete('/:id', BorrowController.getBorrowByName);
router.delete('/:id', BorrowController.getBorrowByPublishDate);

module.exports = router;


export default router;