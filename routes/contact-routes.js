const express = require('express');
const contactController = require('../controllers/contact-controller');

const router = express.Router();

router.post('/contacts', contactController.create);
router.get('/contacts', contactController.findAll);
router.put('/contacts/:id', contactController.update);
router.delete('/contacts/:id', contactController.delete);
router.get('/contacts/search', contactController.search);


module.exports = router;
