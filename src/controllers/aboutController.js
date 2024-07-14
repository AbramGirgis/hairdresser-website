const path = require('path');

// GET /about
function getAbout(req, res) {
    res.render('about');
}

module.exports = {
    getAbout,
};
