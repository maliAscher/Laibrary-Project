// // routers/ProductRouter.ts
// import express from 'express';
// import * as BookController from '../controllers/BookController';


// const router = express.Router();

// router.post('/', BookController.createBook);
// router.get('/', BookController.getAllBooks);
// router.get('/:id', BookController.getBookById);
// router.get('/:id', BookController.getBookByName);
// router.get('/:id', BookController.getBookByGenre);
// router.get('/:id', BookController.getBookByPublishDate);
// router.put('/:id', BookController.updateBookById);
// router.delete('/:id', BookController.deleteBookById);



// export default router;

const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.post('/', BookController.createBook);
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.get('/:id/name', BookController.getBookByName);
router.get('/:id/genre', BookController.getBookByGenre);
router.get('/:id/publish-date', BookController.getBookByPublishDate);
router.put('/:id', BookController.updateBookById);
router.delete('/:id', BookController.deleteBookById);

module.exports = router;
