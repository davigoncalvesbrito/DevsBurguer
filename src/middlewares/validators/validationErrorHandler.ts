import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Mapear todos os erros para um formato específico
    const formattedErrors = errors.array().map((error) => ({
      msg: error.msg,
    }));

    return res.status(400).json({ errors: formattedErrors });
  }

  next();
};
