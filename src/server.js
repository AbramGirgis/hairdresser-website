const express = require('express');
const path = require('path');
const homeController = require('./controllers/homeController');
const servicesController = require('./controllers/servicesController');
const aboutController = require('./controllers/aboutController');
const contactController = require('./controllers/contactController');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Define routes using controllers
app.get('/', homeController.getHome);
app.get('/services', servicesController.getServices);
app.get('/about', aboutController.getAbout);
app.get('/contact', contactController.getContact);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
