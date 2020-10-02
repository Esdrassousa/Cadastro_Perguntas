const express = require('express')
const router = express.Router();

const controller = require('../controllers/RespostaProblema');

router.post('/' , controller.post);
router.get('/:id_Problema' , controller.getByProblema);



module.exports = router;