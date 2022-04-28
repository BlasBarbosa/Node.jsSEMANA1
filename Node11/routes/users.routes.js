const express = require('express');
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
} = require('../controllers/user.controller');
//Importo express y un metodo de expres que es Router...
const router = express.Router();

//Voy a traer de CONTROLLERS las funciones que se realicen posterior a la URL...
// const { FUNCIONES DE CONTROLLERS} = require ('./ EXPORTAR DE CONTROLLERS');

router.get('/', getAllUsers);
// router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/', updateUser);

router.delete('/', deleteUser);

module.exports = { usersRouter: router };
