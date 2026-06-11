import { registerUser, loginUser, getUserById } from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const { email, password, confirmPassword, role } = req.body;

    if (!email || !password || !confirmPassword || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (!['seller', 'buyer'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    const user = await registerUser(email, password, role);

    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user.id, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await loginUser(email, password);

    res.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email, role: user.role },
      accessToken: user.accessToken,
      refreshToken: user.refreshToken
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const profile = async (req, res) => {
  try {
    const user = await getUserById(req.user.userId);
    res.json({ user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};