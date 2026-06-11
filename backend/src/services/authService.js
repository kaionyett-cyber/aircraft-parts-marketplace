import bcrypt from 'bcrypt';
import { query } from '../config/database.js';
import { generateToken, generateRefreshToken } from '../utils/jwt.js';

export const registerUser = async (email, password, role) => {
  try {
    const existingUser = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await query(
      'INSERT INTO users (email, password_hash, role, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id, email, role',
      [email, hashedPassword, role]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const result = await query('SELECT id, email, password_hash, role FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      throw new Error('Invalid email or password');
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    const accessToken = generateToken(user.id, user.role);
    const refreshToken = generateRefreshToken(user.id);

    await query(
      'INSERT INTO refresh_tokens (user_id, token) VALUES ($1, $2)',
      [user.id, refreshToken]
    );

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      accessToken,
      refreshToken
    };
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const result = await query('SELECT id, email, role, created_at FROM users WHERE id = $1', [userId]);
    if (result.rows.length === 0) {
      throw new Error('User not found');
    }
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};