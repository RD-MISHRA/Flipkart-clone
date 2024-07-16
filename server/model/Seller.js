import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
});

const Seller = mongoose.model('Seller', sellerSchema);

export default Seller;
