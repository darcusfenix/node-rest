import gulp from "gulp";
import nodemon from "gulp-nodemon";
import log4js from "log4js";
import {babel} from "gulp-babel";
import Cache from "gulp-file-cache";

const logger = log4js.getLogger("GULP");
const cache = new Cache();

gulp.task("compile", () => {
    let stream = gulp.src("./tools/**/*.es6")
        .pipe(cache.filter())
        .pipe(babel({ ... })) // compile new ones
        .pipe(cache.cache())
        .pipe(gulp.dest("./build"));
    return stream;
});

gulp.task("default", ["compile"], () => {
    return nodemon({
        script: "tools/server",
        watch: "tools",
        tasks: ["compile"]
    }).on('start', () => {
        logger.info("HOLAAAAAAAAAAAA");
    });
});