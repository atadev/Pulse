//import Gulp
import gulp from 'gulp';
//import paths from path.js
import { path } from './gulp/config/path.js';
//import plugins
import { plugins } from './gulp/config/plugins.js';
//import fonts

// make global values

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

//import tasks

import { copy } from './gulp/tasks/copy.js';
import { clear } from './gulp/tasks/clear.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprite } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

export { svgSprite };

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.parallel(copy, html, scss, js, images, svgSprite, fonts);
const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clear, mainTasks);
const deployZip = gulp.series(clear, mainTasks, zip);
const deployFtp = gulp.series(clear, mainTasks, ftp);

export { fonts };
export { dev };
export { build };
export { deployZip };
export { deployFtp };


function watcher() {
    gulp.watch(path.watch.html, html); //gulp.watch(path.watch.html, gulp.series(html, ftp)); //if there is FTP-Server
    gulp.watch(path.watch.files, copy); // ---||---  
    gulp.watch(path.watch.scss, scss); // ---||---  
    gulp.watch(path.watch.js, js); // ---||---  
    gulp.watch(path.watch.images, images); // ---||---  
}

gulp.task('default', dev);