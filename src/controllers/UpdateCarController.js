const Car = require("../models/carSchema");

class UpdateCarController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const car = req.body;
      await Car.update(car, { where: { id } });
      const carUpdated = await Car.findAll({ where: { id }, raw: true });

      res.status(201).json(carUpdated);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = UpdateCarController;
