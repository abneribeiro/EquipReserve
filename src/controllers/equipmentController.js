// controllers/equipmentController.js
const Equipment = require('../models/Equipment');

class EquipmentController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  async createEquipment() {
    try {
      const newEquipment = new Equipment(this.req.body);
      const savedEquipment = await newEquipment.save();
      this.res.status(201).json(savedEquipment);
    } catch (error) {
      this.res.status(500).json({ error: error.message });
    }
  }

  async getAllEquipment() {
    try {
      const equipment = await Equipment.find();
      this.res.status(200).json(equipment);
    } catch (error) {
      this.res.status(500).json({ error: error.message });
    }
  }

  async getEquipmentById() {
    try {
      const equipment = await Equipment.findById(this.req.params.equipmentId);
      if (!equipment) {
        return this.res.status(404).json({ message: 'Equipment not found' });
      }
      this.res.status(200).json(equipment);
    } catch (error) {
      this.res.status(500).json({ error: error.message });
    }
  }

  async updateEquipment() {
    try {
      const updatedEquipment = await Equipment.findByIdAndUpdate(
        this.req.params.equipmentId,
        this.req.body,
        { new: true }
      );
      if (!updatedEquipment) {
        return this.res.status(404).json({ message: 'Equipment not found' });
      }
      this.res.status(200).json(updatedEquipment);
    } catch (error) {
      this.res.status(500).json({ error: error.message });
    }
  }

  async deleteEquipment() {
    try {
      const deletedEquipment = await Equipment.findByIdAndDelete(this.req.params.equipmentId);
      if (!deletedEquipment) {
        return this.res.status(404).json({ message: 'Equipment not found' });
      }
      this.res.status(204).end();
    } catch (error) {
      this.res.status(500).json({ error: error.message });
    }
  }
}

module.exports = (req, res, method) => {
  const controller = new EquipmentController(req, res);
  controller[method]();
};