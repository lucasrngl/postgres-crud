const Person = require("../models/personSchema");

class CreatePersonController {
  async handle(req, res) {
    try {
      const person = req.body;
      const { dataValues } = await Person.create(person);

      return res.status(201).json(dataValues);
    } catch (error) {
      console.error(error);

      return res.status(404).json({ error: "Request failed" });
    }
  }
}

module.exports = CreatePersonController;
