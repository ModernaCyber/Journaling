// src/controllers/authController.ts

import { Request, Response } from 'express';
import { generateAccessToken, generateRefreshToken, verifyToken } from '../utils/jwtUtils';
import { comparePasswords, hashPassword } from '../utils/authUtils';
import { User } from '../sequelize/models/User';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const accessToken = generateAccessToken({ userId: user.id, email: user.email });
    const refreshToken = generateRefreshToken({ userId: user.id, email: user.email });

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not provided' });
  }

  try {
    const decodedToken = verifyToken(refreshToken, 'refresh');

    if (!decodedToken) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    const accessToken = generateAccessToken({ userId: decodedToken.userId, email: decodedToken.email });

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Refresh token error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
