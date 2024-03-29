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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var Rx_1 = require('rxjs/Rx');
var GitHubApiService = (function () {
    function GitHubApiService(_http) {
        this._http = _http;
        this._baseApi = 'https://api.github.com/users';
    }
    GitHubApiService.prototype.getGitHubUserList = function () {
        return this._http.get(this._baseApi).map(this._processResult).catch(this._handleError);
    };
    GitHubApiService.prototype._processResult = function (result) {
        return JSON.parse(result._body) || {};
    };
    GitHubApiService.prototype._handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    GitHubApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubApiService);
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
//# sourceMappingURL=common.service.js.map