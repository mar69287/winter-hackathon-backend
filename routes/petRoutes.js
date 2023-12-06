import express from 'express';
import { show, getById } from '../controllers/pets.js';
const router = express.Router();

router.post('/', show);
router.get('/:id', getById);


export default router;