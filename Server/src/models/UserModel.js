// // models/UserModel.ts

// import mongoose, { Schema, Document } from 'mongoose';
// import { Book } from './BookModel';

// export interface User extends Document {
//   id: number,
//   name: string,
//   age: number,
//   amountOfBooks: number,
//   phone: string,
//   tz : string,
//   book: Book
// }

// const UserSchema: Schema = new Schema({
//   id: { type: Number},
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
//   amountOfBooks: { type: Number, required: true },
//   phone: { type: String, required: true, min: 0, max: 10},
//   tz: { type: String, required: true },
//   book: { type: [], required: true },
// });


// // מביא לנו פרטי משתמש
// UserSchema.methods.getUserInfo = function() {
//   return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Tz: ${this.tz}, Phone: ${this.phone}, AmountOfBooks: ${this.amountOfBooks}, Fine: ${this.fine}`;
// };

// // מחזיר את הקנס של משתמש
// UserSchema.methods.giveUserFine = function() {
//   return this.fine;
// };


// export default mongoose.model<User>('User', UserSchema);


const mongoose = require('mongoose');
const { Book } = require('./BookModel');

const UserSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  amountOfBooks: { type: Number, required: true },
  phone: { type: String, required: true },
  tz: { type: String, required: true },
  book: { type: [Book], required: true }, // Assuming Book is a Mongoose Schema
});

// Instance method - Get user info
UserSchema.methods.getUserInfo = function() {
  return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Tz: ${this.tz}, Phone: ${this.phone}, AmountOfBooks: ${this.amountOfBooks}`;
};

// Instance method - Get user fine
UserSchema.methods.giveUserFine = function() {
  return this.fine; // Assuming fine is defined somewhere in your schema or logic
};

module.exports = mongoose.model('User', UserSchema);
