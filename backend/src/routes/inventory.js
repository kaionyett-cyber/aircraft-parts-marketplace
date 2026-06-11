import express from 'express';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, requireRole(['seller']), async (req, res) => {
  try {
    res.json({ message: 'Get inventory' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', authMiddleware, requireRole(['seller']), async (req, res) => {
  try {
    res.status(201).json({ message: 'Part uploaded' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', authMiddleware, requireRole(['seller']), async (req, res) => {
  try {
    res.json({ message: 'Part updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', authMiddleware, requireRole(['seller']), async (req, res) => {
  try {
    res.json({ message: 'Part deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/bulk-upload', authMiddleware, requireRole(['seller']), async (req, res) => {
  try {
    res.json({ message: 'Bulk upload processed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;