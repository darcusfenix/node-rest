import del from "del";
import fs from "./lib/fs";

import log4js from "log4js";

const logger = log4js.getLogger("CLEAN");

async function clean() {
    await del([".tmp", "build/*", "!build/.git"], { dot: true });
    await fs.makeDir("build/tools");
}

export default clean;