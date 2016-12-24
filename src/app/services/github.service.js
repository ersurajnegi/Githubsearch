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
        this._clientId = '0e0a23e463a58f7fb8f8';
        this._clientSecret = 'a925d0fc86d1330608a7d812c8c745998afa10ad';
        this._baseApiUrl = "http://api.github.com/users/";
        console.log("Github service");
    }
    // getUser(userName: string) {
    //     let url = this._getUsersApiUrl(userName);
    //     return this._http.get(url)
    //         .map(res => res.json());
    // }
    // getRepos(userName: string) {
    //     let url = this._getReposApiUrl(userName);
    //     return this._http.get(url)
    //         .map(res => res.json());
    // }
    // private _getUsersApiUrl(userName: string) {
    //     return this._baseApiUrl + userName + '?client_id='
    //         + this._clientId + '&client_secret' + this._clientSecret;
    // }
    // private _getReposApiUrl(userName: string) {
    //     return this._baseApiUrl + userName + '/repos?client_id='
    //         + this._clientId + '&client_secret' + this._clientSecret;
    // }
    GitHubApiService.prototype.getUserAndRepos = function (userName) {
        return Rx_1.Observable.forkJoin(this._http.get(this._baseApiUrl + userName + '?client_id=' + this._clientId + '&client_secret' + this._clientSecret).map(function (res) { return res.json(); }), this._http.get(this._baseApiUrl + userName + '/repos?client_id=' + this._clientId + '&client_secret' + this._clientSecret).map(function (res) { return res.json(); }));
    };
    GitHubApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GitHubApiService);
    return GitHubApiService;
}());
exports.GitHubApiService = GitHubApiService;
//# sourceMappingURL=github.service.js.map