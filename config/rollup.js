var pkg = require('../package.json');

var banner =
`/*!
 * otf2ttf.js ${pkg.version} (https://github.com/guowenfh/otf2ttf.js)
 * API https://github.com/guowenfh/otf2ttf.js/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} guowenfh. All Rights Reserved
 * Licensed under MIT (https://github.com/guowenfh/otf2ttf.js/blob/master/LICENSE)
 */
`;

function compiler(opt) {
    return require('rollup-plugin-typescript2')(opt);
}

exports.input = 'src/index.ts';
exports.name = 'otf2ttf.js';
exports.banner = banner;
exports.compiler = compiler;
