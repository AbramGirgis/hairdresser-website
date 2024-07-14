const path = require('path');

// GET /services
function getServices(req, res) {
    res.render('services');
}

module.exports = {
    getServices,
};
