const express = require('express')

const {createUser, getUser, getUsers, deleteUser, updateUser } = require('../controllers/users')

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

router.post('/', createUser)

module.exports = router
