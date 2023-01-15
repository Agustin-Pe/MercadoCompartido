const path=require('path');

const mainController={
    index: (req, res) =>{
        res.render('register')
    }
}

module.exports = mainController