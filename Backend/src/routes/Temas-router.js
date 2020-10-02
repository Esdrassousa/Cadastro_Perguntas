
const express = require('express');
const router = express.Router();
const controller = require('../controllers/Temas-controller');


router.post('/', controller.post);
router.get('/:Tema', controller.getByTema);
router.get('/', controller.BuscaTemas);
module.exports  = router;
