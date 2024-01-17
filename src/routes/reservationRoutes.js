// routes/equipmentRoutes.js
const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipmentController');

// Create new equipment
router.post('/', (req, res) => EquipmentController(req, res, 'createEquipment'));

// Get all equipment
router.get('/', (req, res) => EquipmentController(req, res, 'getAllEquipment'));

// Get equipment by ID
router.get('/:equipmentId', (req, res) => EquipmentController(req, res, 'getEquipmentById'));

// Update equipment
router.put('/:equipmentId', (req, res) => EquipmentController(req, res, 'updateEquipment'));

// Delete equipment
router.delete('/:equipmentId', (req, res) => EquipmentController(req, res, 'deleteEquipment'));

module.exports = router;