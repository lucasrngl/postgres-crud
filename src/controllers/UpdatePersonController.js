const Person = require("../models/personSchema");

class UpdatePersonController {
  async handle(req, res) {
    try {
      const { id } = req.params;
      const person = req.body;
      await Person.update(person, { where: { id } });
      const personUpdated = await Person.findAll({ where: { id }, raw: true });

      res.status(201).json(personUpdated);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = UpdatePersonController;
