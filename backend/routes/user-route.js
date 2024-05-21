import express from  "express";
import {
    listUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  } from '../controllers/user-controller.js';

const router = express.Router();

// Get all users
router.get('/', listUsers);

// Get user by ID
router.get('/:userId', getUser);

// Create user
router.post('/', createUser);

// Update user
router.put('/:userId', updateUser);

// Delete user
router.delete('/:userId', deleteUser);

export default router;