const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.listen(4000, () => console.log("Did someone just say port 4000?")); 