import express from 'express';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/plans', async (req, res) => {
  try {
    const plans = [
      { id: 1, name: 'Starter', price: 29, billing_cycle: 'monthly', features: ['100 searches/month', 'Basic support'] },
      { id: 2, name: 'Professional', price: 99, billing_cycle: 'monthly', features: ['Unlimited searches', 'Priority support'] },
      { id: 3, name: 'Seller Pro', price: 79, billing_cycle: 'monthly', features: ['Unlimited uploads', 'Analytics'] }
    ];
    res.json({ plans });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/subscribe', authMiddleware, async (req, res) => {
  res.status(201).json({ message: 'Subscription created' });
});

router.get('/user', authMiddleware, async (req, res) => {
  res.json({ subscription: null });
});

router.delete('/:id', authMiddleware, async (req, res) => {
  res.json({ message: 'Subscription cancelled' });
});

export default router;