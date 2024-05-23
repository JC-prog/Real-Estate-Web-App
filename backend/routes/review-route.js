import express from  "express";
import {
    createReview
  } from '../controllers/review-controller.js';

const router = express.Router();

// Create Review
router.post('/', createReview);

export default router;