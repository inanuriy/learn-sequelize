const { todos } = require("../../models");

module.exports = {
    getAll: async (req,res) => {
        try {
            const result = await todos.findAll()

            res.status(200).send({
                message: "Show all todos data",
                data:result
            });
        } catch (error) {
            console.log(error)
        }
    }
}