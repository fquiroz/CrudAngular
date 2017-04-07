"use strict";
var browserSync = require('browser-sync');
var config_1 = require('../../config');
var runServer = function () {
    browserSync.init(config_1.default.getPluginConfig('browser-sync'));
};
var listen = function () {
    runServer();
};
exports.listen = listen;
var changed = function (files) {
    if (!(files instanceof Array)) {
        files = [files];
    }
    browserSync.reload(files);
};
exports.changed = changed;
//# sourceMappingURL=/home/ferlux/Documentos/desarrollo/worskpaces/AngularJs/CrudAngular/ts-node/d09391176b31b1ece56ae75884c136fb674d75eb/fc0d6f83d2a9542f21a8b57360a7f61a2f641f89.js.map