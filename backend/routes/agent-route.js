import express from  "express";
import {
    listAgents,
    getAgent,
  } from '../controllers/properties-controller.js';

const router = express.Router();

// Get all Properties
router.get('/', listAgents);

// Get Agent by ID
router.get('/:AgentId', getAgent);

export default router;