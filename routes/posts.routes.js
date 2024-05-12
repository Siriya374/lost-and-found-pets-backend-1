import express from 'express';

import {
  add_post,
  getAll_post,
  update_post,
} from '../controllers/posts.controller.js';

const router = express.Router();

router.post('/add_post', add_post);
router.get('/getAll_post', getAll_post);
router.post('/update_post', update_post);

export default router;