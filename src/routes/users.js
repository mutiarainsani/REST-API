const express = require('express');

const UserControler = require('../controller/users.js');

const router = express.Router();

// CREATE - POST
router.post('/', UserControler.createNewUser);

// READ - GET
router.get('/', UserControler.getAllUsers);

// UPDATE - PATCH
router.patch('/:idUser', UserControler.updateUser);

//DELETE - DELETE
router.delete('/:idUser', UserControler.deleteUser);

module.exports = router;
