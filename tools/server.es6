import express from "express";
import log4js from "log4js";

const logger = log4js.getLogger("SERVER");
const APP = express();
const PORT = process.env.PORT || 3000;

APP.get("/", (req, res) => {
    res.send("WELCOME TO MY API");
});

APP.listen(PORT, () => {
    logger.info("RUNNING SERVER ON PORT: " + PORT);
});
