const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Assuming you have a router for user-related routes
const userRoutes = require('./controllers/api/userRoutes');
app.use('/api/users', userRoutes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});
