const Car = require("../models/carSchema");

class ListCarController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const cars = await Car.findAll({ where: { id }, raw: true });

      return res.status(200).json(cars);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = ListCarController;
