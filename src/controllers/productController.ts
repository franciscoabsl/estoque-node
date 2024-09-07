import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Product } from '../entities/Product';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, expirationDate, category, quantity } = req.body;

  const product = new Product();
  product.name = name;
  product.expirationDate = new Date(expirationDate);
  product.category = category;
  product.quantity = quantity;

  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productRepository = AppDataSource.getRepository(Product);
    const product = await productRepository.findOneBy({ id: parseInt(id) });

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o produto' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, expirationDate, category, quantity } = req.body;

  try {
    const product = await Product.findOneBy({ id: parseInt(id) });

    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.name = name;
    product.expirationDate = new Date(expirationDate);
    product.category = category;
    product.quantity = quantity;

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.findOneBy({ id: parseInt(id) });

    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};
