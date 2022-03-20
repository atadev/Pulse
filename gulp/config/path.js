import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dest';
const sourceFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files`,
    },
    src: {
        js: `${sourceFolder}/js/app.js`,
        images: `${sourceFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
        svg: `${sourceFolder}/img/**/*.svg`,
        webp: `${sourceFolder}/img/**/*.webp`,
        svgicons: `${sourceFolder}/svgicons/*.svg`,
        scss: `${sourceFolder}/scss/style.scss`,
        html: `${sourceFolder}/*.html`, //remove commernt if use HTML & comment PUG
        // html: `${sourceFolder}/*.pug`,
        files: `${sourceFolder}/files/**/*.*`,
    },
    watch: {
        js: `${sourceFolder}/js/**/*.js`,
        images: `${sourceFolder}/img/**/*.{jpg, jpeg, png, gif, webp, svg, ico}`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        html: `${sourceFolder}/**/*.html`, //remove commernt if use HTML & comment PUG
        // html: `${sourceFolder}/**/*.pug`,
        files: `${sourceFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    rootFolder: rootFolder,
    sourceFolder: sourceFolder,
    ftp: `Work/del`
};