import express from 'express';

import {
  add_type,
} from '../controllers/types.controller.js';

const router = express.Router();

router.post('/add_type', add_type);

export default router;