const express = require ('express');
const { getAllrepairs, createRepair, updateRepair, deleteRepair, getRepairById } = require('../controllers/repair.controller');
const router = express.Router();

//Funciones extraidas de controllers, para indicar realizar a los router, posterior a endpoint
// const { FUNCIONES DE CONTROLLERS} = require ('./ EXPORTAR DE CONTROLLERS');

router.get('/', getAllrepairs);
router.get('/:id', getRepairById);

router.post('/', createRepair )

router.patch('/', updateRepair )

router.delete('/', deleteRepair )

module.exports = { repairsRouter: router};