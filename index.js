require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/", require("./routes/index"));

app.listen(process.env.PORT, () => {
    console.log(`app listening on ${process.env.PORT}`);
})
