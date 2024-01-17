// controllers/reservationController.js
const Reservation = require('../models/Reservation');
// TODO melhor o codigo abaixo para que ele fique mais legivel

class ReservationController {
  // Create new reservation
   async createReservation(req, res) {
    try {
        // fazer a validação do body da requisição
        // verificar se o equipamento está disponivel
        // verificar se o usuário existe
        // verificar se o usuário tem permissão para reservar o equipamento
        // verificar se o usuário não tem outra reserva no mesmo horário
        // verificar se o usuário não tem outra reserva no mesmo dia
        
      const newReservation = new Reservation(req.body);
      const savedReservation = await newReservation.save();
      res.status(201).json(savedReservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all reservations
   async getAllReservations(req, res) {
    try {
        // verificar se o usuário tem permissão para listar as reservas
        // verificar se o usuário tem permissão para listar as reservas de um equipamento
        // verificar se o usuário tem permissão para listar as reservas de um usuário

      const reservations = await Reservation.find();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get reservation by ID
   async getReservationById(req, res) {
    try {
        // verificar se o usuário tem permissão para listar a reserva
        // verificar se o usuário tem permissão para listar a reserva de um equipamento
        // verificar se o usuário tem permissão para listar a reserva de um usuário

      const reservation = await Reservation.findById(req.params.reservationId);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(200).json(reservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update reservation
   async updateReservation(req, res) {
    try {
        // verificar se o usuário tem permissão para atualizar a reserva
        // verificar se o usuário tem permissão para atualizar a reserva de um equipamento
        // verificar se o usuário tem permissão para atualizar a reserva de um usuário
        // verificar se o equipamento está disponivel
        // verificar se o usuário existe
        // verificar se o usuário tem permissão para reservar o equipamento
        // verificar se o usuário não tem outra reserva no mesmo horário
        // verificar se o usuário não tem outra reserva no mesmo dia
      const updatedReservation = await Reservation.findByIdAndUpdate(
        req.params.reservationId,
        req.body,
        { new: true }
      );
      if (!updatedReservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(200).json(updatedReservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete reservation
   async deleteReservation(req, res) {
    try {
        // verificar se o usuário tem permissão para excluir a reserva
        // verificar se o usuário tem permissão para excluir a reserva de um equipamento
        // verificar se o usuário tem permissão para excluir a reserva de um usuário
        // verificar se o equipamento está disponivel
        // verificar se o usuário existe
        // verificar se o usuário tem permissão para reservar o equipamento
        // verificar se o usuário não tem outra reserva no mesmo horário
        // verificar se o usuário não tem outra reserva no mesmo dia
      const deletedReservation = await Reservation.findByIdAndDelete(req.params.reservationId);
      if (!deletedReservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ReservationController;
