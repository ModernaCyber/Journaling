// src/utils/jwtUtils.ts

import jwt from 'jsonwebtoken';

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your_access_jwt_secret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_refresh_jwt_secret';
const ACCESS_TOKEN_EXPIRY = '1h'; // Adjust as needed
const REFRESH_TOKEN_EXPIRY = '7d'; // Adjust as needed

export const generateAccessToken = (payload: any): string => {
  return jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
};

export const generateRefreshToken = (payload: any): string => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRY });
};

export const verifyToken = (token: string, type: 'access' | 'refresh'): any => {
  try {
    const secret = type === 'access' ? JWT_ACCESS_SECRET : JWT_REFRESH_SECRET;
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
};
