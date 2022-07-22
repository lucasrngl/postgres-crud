const Car = require("../models/carSchema");

class CreateCarController {
  async handle(req, res) {
    try {
      const car = req.body;
      const { dataValues } = await Car.create(car);

      return res.status(201).json(dataValues);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = CreateCarController;
