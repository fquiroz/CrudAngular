"use strict";
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var config_1 = require('../../config');
var plugins = gulpLoadPlugins();
var tsProjects = {};
function makeTsProject(options) {
    if (options === void 0) { options = {}; }
    var optionsHash = JSON.stringify(options);
    if (!tsProjects[optionsHash]) {
        var config = Object.assign({
            typescript: require('typescript')
        }, options);
        tsProjects[optionsHash] =
            plugins.typescript.createProject(path_1.join(config_1.default.APP_SRC, 'tsconfig.json'), config);
    }
    return tsProjects[optionsHash];
}
exports.makeTsProject = makeTsProject;
//# sourceMappingURL=/home/ferlux/Documentos/desarrollo/worskpaces/AngularJs/CrudAngular/ts-node/d09391176b31b1ece56ae75884c136fb674d75eb/59ec942b78cfb65add1bbcb666a9c0de8792933f.js.map