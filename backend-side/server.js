const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const mongoose = require('mongoose');
const Bookmark = require('./modals/Bookmark');


const app = express();




app.listen(4000, () => {
    console.log("Server on port 4000");
});