import express from  "express";
import {
    listProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getPropertiesByAgentId,
    getPropertiesByKeyword,
    incrementViewCounter,
    getPropertyViews,
    getPropertyWatchlistCount,
  } from '../controllers/properties-controller.js';

const router = express.Router();

// Get all Properties
router.get('/', listProperties);

// Get Properties By Agent Id
router.get('/properties-agent', getPropertiesByAgentId);

// Get Property by keyword
router.get('/properties-search', getPropertiesByKeyword);

// Get Property by ID
router.get('/:propertyId', getProperty);

// Create Property
router.post('/', createProperty);

// Update Property
router.put('/:propertyId', updateProperty);

// Delete Property
router.delete('/:propertyId', deleteProperty);

//Set Property Views
router.post('/:id/increment-views', incrementViewCounter);

//Get Property Views
router.get('/:id/views', getPropertyViews)

//Get Watchlist Count
router.get('/:id/watchlist-count', getPropertyWatchlistCount);


export default router;