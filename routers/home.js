let express = require('express')
let homeController = require('../controllers/homeController');
let router = express.Router();

router.get('/', homeController.index)

/*router.get('//descripcion', mainController.index)*/ 


module.exports = router;