const express = require('express');

const app = express();
const PORT = 3000;


// Require the error handlers
const {
    handleErrors,
    handleValidationErrors
} = require('./middleware/custom_errors');


app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
});