"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_component_1 = require('./common.component');
var common_service_1 = require('./common.service');
var CommonModule = (function () {
    function CommonModule() {
        console.log('Hi from Common Module');
    }
    CommonModule = __decorate([
        core_1.NgModule({
            declarations: [common_component_1.CommonComponent],
            exports: [common_component_1.CommonComponent],
            providers: [common_service_1.GitHubApiService],
        }), 
        __metadata('design:paramtypes', [])
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map