import User from './auth.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  generateAccessToken,
  generateRefreshToken
} from '../../common/utlis/token.js';

export const register = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  return user;
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  return { user, accessToken, refreshToken };
};

export const refreshToken = async (token) => {
  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

  const user = await User.findById(decoded.id);
  if (!user || user.refreshToken !== token) {
    throw new Error('Invalid refresh token');
  }

  const newAccessToken = generateAccessToken(user);
  return { accessToken: newAccessToken };
};

export const getProfile = async (userId) => {
  return await User.findById(userId).select('-password');
};