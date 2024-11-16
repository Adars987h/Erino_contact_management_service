const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact-routes');
const sequelize = require('./config/db-config')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', contactRoutes);

const PORT = 3001;

sequelize.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Server running on http://localhost:3001');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
