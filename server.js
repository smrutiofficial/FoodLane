const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// Route-handling middleware
app.use('/', require('./routes/root'));

// Static file serving middleware
app.use('/', express.static(path.join(__dirname, '/public')));

app.listen(PORT, () => console.log(`Server running on port http://127.0.0.1:${PORT}`));
