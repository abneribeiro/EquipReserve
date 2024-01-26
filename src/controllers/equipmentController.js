// controllers/equipmentController.js
const Equipment = require("../models/Equipment");

class EquipmentController {
  async createEquipment(req, res) {
    try {
      const { name, description, quantity } = req.body;
      const equipment = new Equipment({ name, description, quantity, owner: req.userId});
      await equipment.save();
      res.status(201).json({ message: "Equipment registered successfully." });
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Failed to register Equipment.",
      });
    }
  }

  async getAllEquipment(req, res) {
    try {
      const equipment = await Equipment.find();
      res.status(200).json(equipment);
    } catch (error) {
      res
        .status(500)
        .json({ error: error.message, message: "Failed to find Equipment" });
    }
  }

  async getEquipmentById(req, res) {
    try {
      const equipment = await Equipment.findById(req.params.equipmentId);
      if (!equipment) {
        return res.status(404).json({ message: "Equipment not found" });
      }
      res.status(200).json(equipment);
    } catch (error) {
      res
        .status(500)
        .json({ error: error.message, message: "Failed to find Equipment" });
    }
  }

  async updateEquipment(req, res) {
    try {
      const equipmentId = req.params.equipmentId;
      const updatedEquipment = await Equipment.findByIdAndUpdate(
        equipmentId,
        req.body,
        { new: true }
      );
      if (!updatedEquipment) {
        return this.res.status(404).json({ message: "Equipment not found" });
      }
      this.res.status(200).json(updatedEquipment);
    } catch (error) {
      res.status(500).json({ error: error.message, message: "Failed to update Equipment" });
    }
  }

  async deleteEquipment(req, res) {
    try {
      const equipmentId = req.params.equipmentId;
      const deletedEquipment = await Equipment.findByIdAndDelete(equipmentId);
      if (!deletedEquipment) {
        return res.status(404).json({ message: "Equipment not found" });
      }
      res.status(204).json({ message: "Equipment deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message, message: "Failed to delete Equipment" });
    }
  }
}

module.exports = new EquipmentController();
