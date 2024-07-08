// src/middleware/authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decodedToken = verifyToken(token, 'access');

  if (!decodedToken) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  req.body.user = decodedToken;

  next();
};
