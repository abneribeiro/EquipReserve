// routes/equipmentRoutes.js
const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipmentController');

// Create new equipment
router.post('/', EquipmentController.createEquipment.bind(EquipmentController));

// Get all equipment
router.get('/', EquipmentController.getAllEquipment.bind(EquipmentController));

// Get equipment by ID
router.get('/:equipmentId', EquipmentController.getEquipmentById.bind(EquipmentController));

// Update equipment
router.put('/:equipmentId', EquipmentController.updateEquipment.bind(EquipmentController));

// Delete equipment
router.delete('/:equipmentId', EquipmentController.deleteEquipment.bind(EquipmentController));

module.exports = router;
