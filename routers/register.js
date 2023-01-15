let express = require('express');
let registerController = require('../controllers/registerController');
let router = express.Router();

router.get('/', registerController.index);

/*router.get('//descripcion', mainController.index)*/ 


module.exports = router;