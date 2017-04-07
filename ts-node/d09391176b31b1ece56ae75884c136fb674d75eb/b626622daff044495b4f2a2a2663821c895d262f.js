"use strict";
var gulpLoadPlugins = require('gulp-load-plugins');
var path_1 = require('path');
var runSequence = require('run-sequence');
var config_1 = require('../../config');
var utils_1 = require('../../utils');
var plugins = gulpLoadPlugins();
function watch(taskname) {
    return function () {
        var paths = [
            path_1.join(config_1.default.APP_SRC, '**')
        ].concat(config_1.default.TEMP_FILES.map(function (p) { return '!' + p; }));
        plugins.watch(paths, function (e) {
            return runSequence(taskname, function () { return utils_1.notifyLiveReload(e); });
        });
    };
}
exports.watch = watch;
//# sourceMappingURL=/home/ferlux/Documentos/desarrollo/worskpaces/AngularJs/CrudAngular/ts-node/d09391176b31b1ece56ae75884c136fb674d75eb/b626622daff044495b4f2a2a2663821c895d262f.js.map