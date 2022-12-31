import { NextFunction, Request, Response } from 'express';
import CustomError from '../Error/CustomError';

class ErrorHandler {
  public static handle(
    error: CustomError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;
