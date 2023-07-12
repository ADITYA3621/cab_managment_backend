const express = require('express')
const controllers = require('../../controllers/driver')

const router = express.Router()

router.get('/', controllers.get_drivers)
router.get('/:id', controllers.get_driver_specific)
router.post('/', controllers.create_driver)
router.patch('/:id', controllers.update_driver)
router.delete('/:id', controllers.delete_driver)


module.exports = router