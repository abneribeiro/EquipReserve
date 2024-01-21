// middlewares/reservationTimingMiddleware.js
async function checkReservationTiming(req, res, next) {
  try {
    // Verificar se os campos de tempo de reserva estão presentes
    if (!req.body.startTime || !req.body.endTime) {
      return res.status(400).json({ message: "Missing reservation time" });
    }
    // Implemente a lógica de verificação aqui
    const startTime = new Date(req.body.startTime);
    const endTime = new Date(req.body.endTime);
    const currentDate = new Date();
    // Verificar se a reserva tem duração mínima ou máxima
    const duration = (endTime - startTime) / 1000 / 60; // duration in minutes
    const minDuration = 30; // minimum duration in minutes
    const maxDuration = 120; // maximum duration in minutes
    if (duration < minDuration || duration > maxDuration) {
      return res.status(400).json({ message: "Invalid reservation duration" });
    }
    if (startTime < currentDate) {
      return res.status(400).json({ message: "Invalid reservation time" });
    }
    if (endTime < startTime) {
      return res.status(400).json({ message: "Invalid reservation time" });
    }
    next();
  } catch (error) {
    // Se tudo estiver ok, chame next()
    // Caso contrário, retorne um erro
    // TODO: Verificar se o tempo de reserva já está ocupado
    // Você precisará interagir com seu banco de dados ou outro estado do aplicativo aqui.
    // Como isso é feito depende do seu aplicativo específico.
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
q
module.exports = checkReservationTiing;
