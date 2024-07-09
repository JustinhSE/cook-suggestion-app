const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./uploadRoutes'); // adjust path if necessary

const app = express();

app.use(cors());
app.use(express.json());

// Use the upload routes
app.use('/api', uploadRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
