import express from 'express';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/invoices', authMiddleware, async (req, res) => {
  res.json({ invoices: [] });
});

router.get('/invoices/:id', authMiddleware, async (req, res) => {
  res.json({ invoice: null });
});

router.post('/usage', authMiddleware, async (req, res) => {
  res.json({ message: 'Usage logged' });
});

router.post('/payment', authMiddleware, async (req, res) => {
  res.json({ message: 'Payment processed', transaction_id: 'TXN_123456' });
});

export default router;