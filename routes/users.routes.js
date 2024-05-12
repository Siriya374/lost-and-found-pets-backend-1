import express from 'express';

import {
  createUser,
} from '../controllers/users.controller.js';

const router = express.Router();

// router.get('/', getProducts);
router.post('/create', createUser);
// router.get('/product/:id', getProduct);
// router.put('/update/:id', updateProduct);
// router.delete('/delete/:id', deleteProduct);

export default router;