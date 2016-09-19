import clean from "./clean";
import run from './run';
import log4js from "log4js";

const logger = log4js.getLogger("APP");

async function build() {
    await run(clean);
}

export default build;
