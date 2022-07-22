const Person = require("../models/personSchema");
const Car = require("../models/carSchema");

class ListPersonController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const [person] = await Person.findAll({ where: { id }, raw: true });
      const cars = await Car.findAll({
        where: { person_id: id },
        raw: true,
      });

      person.cars = cars;

      return res.status(200).json({ person });
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = ListPersonController;
