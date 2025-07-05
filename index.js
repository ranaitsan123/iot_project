require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');

const app = express();
app.use(cors());
app.use(express.json());

const dataRoutes = require('./routes/data');
const alertRoutes = require('./routes/alerts');

app.use('/data', dataRoutes);
app.use('/alerts', alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
