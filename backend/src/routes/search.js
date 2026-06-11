import express from 'express';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, requireRole(['buyer']), async (req, res) => {
  try {
    const { query, category, manufacturer, limit = 20, offset = 0 } = req.query;
    res.json({ message: 'Search results', results: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    res.json({ message: 'Part details' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/categories/list', authMiddleware, async (req, res) => {
  try {
    res.json({ categories: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;