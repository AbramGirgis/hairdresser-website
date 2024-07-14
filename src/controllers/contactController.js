const path = require('path');

// GET /contact
function getContact(req, res) {
    res.render('contact');
}

module.exports = {
    getContact,
};
