
import Product from '../model/products-schema.js';
import { v4 as uuidv4 } from 'uuid';

export const createProduct = async (req, res) => {
  console.log("createProduct controller function called");
  console.log(req.body);
  try {
  
    const {
      title,
      price,
      quantity,
      description,
      tagline,
      category,
      seller
    } = req.body;

    const parsedTitle = JSON.parse(title);
    const parsedPrice = JSON.parse(price);

    // Ensure all numerical values are properly parsed
    parsedPrice.mrp = parseFloat(parsedPrice.mrp);
    parsedPrice.cost = parseFloat(parsedPrice.cost);
    // parsedPrice.discount = parseFloat(parsedPrice.discount);

    const url = req.file.path;
    const detailUrl = req.file.path;
    const id = uuidv4();

    const newProduct = new Product({
      id,
      url,
      detailUrl,
      title: parsedTitle,
      price: parsedPrice,
      quantity: parseInt(quantity, 10), // Ensure quantity is a number
      description,
      tagline,
      category,
      seller,
    });
    console.log('newProduct', newProduct);

    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ error: err.message });
  }
};
