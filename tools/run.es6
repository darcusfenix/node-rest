

const format = (time) => {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
};

const run = (fn, options) => {
    const log4js = require("log4js");
    const logger = log4js.getLogger("EXEC-TASK-ASYNC");

    const task = typeof fn.default === 'undefined' ? fn : fn.default;
    const start = new Date();
    logger.info(`Starting '${task.name}'...`);
    return task(options).then(() => {
        const end = new Date();
        const time = end.getTime() - start.getTime();
        logger.info(`Finished '${task.name}' after ${time} ms`);
    });
};

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
    delete require.cache[__filename];
    const module = require(`./${process.argv[2]}.es6`).default;
    run(module).catch(err => console.error(err.stack));
}

export default run;