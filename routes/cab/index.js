const express = require('express');
const controllers = require('../../controllers/cab');

const router = express.Router();

router.get('/', controllers.cab_get);
router.get('/:id', controllers.cab_specific);
router.post('/', controllers.cab_add);
router.patch('/:id', controllers.cab_update);
router.delete('/:id', controllers.cab_delete);

module.exports = router
