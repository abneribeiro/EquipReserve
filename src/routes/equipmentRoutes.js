// routes/equipmentRoutes.js
const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipmentController');

// Create new equipment
router.post('/', EquipmentController.createEquipment);

// Get all equipment
router.get('/',  EquipmentController.getAllEquipment);

// Get equipment by ID
router.get('/:equipmentId', EquipmentController.getEquipmentById);

// Update equipment
router.put('/:equipmentId',EquipmentController.updateEquipment);

// Delete equipment
router.delete('/:equipmentId', EquipmentController.deleteEquipment);

module.exports = router;