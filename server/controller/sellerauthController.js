import Seller from '../model/Seller.js';

export const register = async (req, res) => {
  const { shopName, email, password, contact, address } = req.body;

  try {
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: 'Seller already exists.' });
    }

    const seller = new Seller({
      shopName,
      email,
      password,  
      contact,
      address,
    });

    await seller.save();

    res.status(201).json({ message: 'Seller registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const seller = await Seller.findOne({ email });
    if (!seller) {
      return res.status(400).json({ message: 'Seller not found.' });
    }

    // Directly compare passwords (not recommended for production)
    if (password !== seller.password) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
};
