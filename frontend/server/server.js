const express = require('express');
const app = express();
const api = require('./routes/index');
app.use('/api', api);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server run : http://localhost:${PORT}/')
})

