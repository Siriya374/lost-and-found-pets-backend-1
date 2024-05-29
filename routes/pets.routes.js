import express from 'express';

import {
  add_pets,
  getAll_pets,
  update_pets,
} from '../controllers/pets.controller.js';

const router = express.Router();

router.post('/add_pets', add_pets);
router.get('/getAll_pets', getAll_pets);
router.post('/update_pets', update_pets);

export default router;