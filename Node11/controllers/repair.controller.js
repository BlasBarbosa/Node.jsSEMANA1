const { Repair } = require('../models/repair.model');

const getAllrepairs= async (req, res) => {
  try {
    const repair = await Post.findAll();

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const createRepair = async (req, res) => {
  try {
    const { date, repairId } = req.body;

    //Funcionalidad equivalente a INSERT TO....
    const newRepair = await repair.create({ date, repairId });

    res.status(201).json({ newRepair });
  } catch (error) {
    console.log(error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, status } = req.body;

    const repair = await repair.findOne({ where: { id } });

    await repair.update({ date, status });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await repair.findOne({ where: { id } });

    await repair.update({ status: 'deleted' });

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllrepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};