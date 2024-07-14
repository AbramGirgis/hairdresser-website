const path = require('path');

// GET /
function getHome(req, res) {
    res.render('index');
}

module.exports = {
    getHome,
};
