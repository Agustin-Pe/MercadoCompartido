let express = require('express');
let loginController = require('../controllers/loginController');
let router = express.Router();

router.get('/', loginController.index)

/*router.get('//descripcion', mainController.index)*/ 


module.exports = router;