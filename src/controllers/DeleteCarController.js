const Car = require("../models/carSchema");

class DeleteCarController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      await Car.destroy({ where: { id } });

      res.status(204).json();
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = DeleteCarController;
