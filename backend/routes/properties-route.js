import express from  "express";
import {
    listProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getPropertiesByAgentId
  } from '../controllers/properties-controller.js';

const router = express.Router();

// Get all Properties
router.get('/', listProperties);

// Get Properties By Agent Id
router.get('/properties-agent', getPropertiesByAgentId);

// Get Property by ID
router.get('/:propertyId', getProperty);

// Create Property
router.post('/', createProperty);

// Update Property
router.put('/:propertyId', updateProperty);

// Delete Property
router.delete('/:propertyId', deleteProperty);

export default router;