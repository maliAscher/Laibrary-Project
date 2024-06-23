// import mongoose, { Schema, Document } from "mongoose"

// export interface Borrow extends Document {
//     id: number,
//     user_id: number,
//     borrow_date: Date,
//     return_date: Date,
//     book_id: number,
//     fine:number
//   }
  
//   const BorrowSchema: Schema = new Schema({
//     id: { type: Number},
//     user_id: { type: Number, required: true },
//     borrow_date: { type: Date, required: true },
//     return_date: { type: Date, required: true },
//     book_id: { type: Number, required: true },
//     fine: { type: Number},
//   })

//   BorrowSchema.methods.getBorrowInfo = function() {
//     return `Id: ${this.id}, user_id: ${this.user_id}, borrow_date: ${this.borrow_date}, return_date: ${this.return_date}, book_id: ${this.book_id}, fine: ${this.fine}`;
  
// };
 
//   export default mongoose.model<Borrow>('Borrow', BorrowSchema);


const mongoose = require("mongoose");

const BorrowSchema = new mongoose.Schema({
  id: { type: Number },
  user_id: { type: Number, required: true },
  borrow_date: { type: Date, required: true },
  return_date: { type: Date, required: true },
  book_id: { type: Number, required: true },
  fine: { type: Number },
});

BorrowSchema.methods.getBorrowInfo = function() {
  return `Id: ${this.id}, user_id: ${this.user_id}, borrow_date: ${this.borrow_date}, return_date: ${this.return_date}, book_id: ${this.book_id}, fine: ${this.fine}`;
};

module.exports = mongoose.model("Borrow", BorrowSchema);
