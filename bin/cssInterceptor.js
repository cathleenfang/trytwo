'use strict'

const path = require('path');
const fs = require('fs');
const precss = require('precss');

function cssRender(pcssFilePath) {
    var css = fs.readFileSync(pcssFilePath);

    return postcss([
        postcsseach,
        precss,
        cssnext({
            browsers: [
                'ie > 7',
                'Chrome > 0',
                'Firefox > 0',
                'iOS > 0',
                'Android > 0',
                'Edge > 0'
            ]
        }),
        postcssshort
    ]).process(css, { from: pcssFilePath })
}