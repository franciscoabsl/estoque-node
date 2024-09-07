// src/middlewares/validateProduct.ts
import { Request, Response, NextFunction } from 'express';
import { isFutureDate } from '../validators/IsFutureDate';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { expirationDate } = req.body;

  // Verifica se a data de validade está presente e se é válida
  if (!expirationDate || isNaN(Date.parse(expirationDate))) {
    return res.status(400).json({ message: 'Data de validade inválida' });
  }

  // Usa a função isFutureDate para validar se a data é no futuro
  if (!isFutureDate(expirationDate)) {
    return res
      .status(400)
      .json({ message: 'A data de validade deve ser uma data futura' });
  }

  // Se a validação passar, continue para o próximo middleware ou controlador
  next();
};

export default validateProduct;
