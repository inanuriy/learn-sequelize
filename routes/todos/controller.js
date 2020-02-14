const { todos } = require("../../models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await todos.findAll();

      res.status(200).send({
        message: "Show all todos data",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const result = await todos.findOne({ where: { id: id } });

      res.status(200).send({
        message: `Show data id ${id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  addData: async (req, res) => {
    try {
      const result = await todos.create(req.body);

      res.status(200).send({
        message: `Todo is successfully added`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateData: async (req, res) => {
    try {
      const {id} = req.params;
      const result = await todos.update(req.body, { where: {id} });

      res.status(200).send({
        message: `Todo successfully updated`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },

  deleteData: async (req, res) => {
    try {
      const {id} = req.params;
      const result = await todos.destroy({ where: {id} });

      res.status(200).send({
        message: `Todo successfully deleted`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
