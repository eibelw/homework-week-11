const { todo } = require("../models");

class TodoController {
  static async getAll(req, res, next) {
    try {
      const data = await todo.findAll({ where: { status: "Sudah" } });

      if (!data) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const data = await todo.findOne({ where: { id } });
      if (!data) {
        throw { name: "Data not found" };
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async create(req, res, next) {
    const { title, status } = req.body;
    try {
      const data = await todo.create({ title, status });
      res.status(201).json({ message: "New data created" });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { title, status } = req.body;
    try {
      const data = await todo.update({ title, status }, { where: { id } });
      if (!data) {
        throw { name: "Data wrong" };
      } else {
        res.status(200).json({ message: "New data updated" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async soft_delete(req, res, next) {
    const { id } = req.params;
    try {
      const data = await todo.update({ status: "Belum" }, { where: { id } });
      if (!data) {
        throw { name: "Data wrong" };
      } else {
        res.status(200).json({ message: "Data changed succesfully" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    const { id } = req.params;
    try {
      const data = await todo.destroy({ where: { id } });
      if (!data) {
        throw { name: "Data wrong" };
      } else {
        res.status(200).json({ message: "Data deleted succesfully" });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TodoController;
