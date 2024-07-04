import mongoose from 'mongoose';

const { Schema } = mongoose;
const OrderSchema = new Schema({
  items: [
    {
      name: String,
      quantity: Number,
      price: String,
    }
  ],
  totalAmount: Number,
  orderDate: { type: Date, default: Date.now },
});
      
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  orders: [OrderSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const foodItemSchema = new mongoose.Schema({
  name: String,
  description:String,
  special: String,
  category: String,
  price: Number,

}, { collection: 'FoodItems' });

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

//add orders !

const User = mongoose.model('User', UserSchema, 'Menus');
export default { User, FoodItem };
