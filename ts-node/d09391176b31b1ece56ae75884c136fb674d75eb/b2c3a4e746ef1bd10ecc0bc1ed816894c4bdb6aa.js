"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var path_1 = require('path');
var seed_config_1 = require('./seed.config');
var ProjectConfig = (function (_super) {
    __extends(ProjectConfig, _super);
    function ProjectConfig() {
        _super.call(this);
        this.PROJECT_TASKS_DIR = path_1.join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
        this.FONTS_DEST = this.APP_DEST + "/fonts";
        this.FONTS_SRC = [
            'node_modules/font-awesome/fonts/**'
        ];
        this.APP_TITLE = 'PRUEBA FERNANDO ';
        this.NPM_DEPENDENCIES = this.NPM_DEPENDENCIES.concat([
            { src: 'font-awesome/css/font-awesome.css', inject: true },
            { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
            { src: 'highcharts/highcharts.js', inject: 'libs' },
            { src: 'lodash/lodash.min.js', inject: 'libs' }
        ]);
        this.APP_ASSETS = this.APP_ASSETS.concat([
            { src: this.CSS_SRC + "/app.css", inject: true, vendor: false },
            { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
            { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
            { src: 'bootstrap/dist/css/bootstrap-theme.min.css', inject: true },
            { src: 'bootstrap/dist/css/bootstrap-theme.min.css.map', inject: true },
        ]);
    }
    return ProjectConfig;
}(seed_config_1.SeedConfig));
exports.ProjectConfig = ProjectConfig;
//# sourceMappingURL=/home/ferlux/Documentos/desarrollo/worskpaces/AngularJs/CrudAngular/ts-node/d09391176b31b1ece56ae75884c136fb674d75eb/b2c3a4e746ef1bd10ecc0bc1ed816894c4bdb6aa.js.map