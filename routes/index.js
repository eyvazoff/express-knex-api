const Auth = require('../controllers/Auth');
module.exports = function (app) {
    app.get('/', (req, res, next) => {
        res.json({
            error: 'Base route not found'
        });
    });


    /*--------------------------------------*/
    app.post('/auth/login', Auth.Login);
    /*--------------------------------------*/


    app.all('*', function (req, res) {
        res.json({
            error: 'Route not found'
        });
    });
};