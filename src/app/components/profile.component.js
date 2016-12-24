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
var github_service_1 = require('../services/github.service');
var ProfileComponent = (function () {
    function ProfileComponent(_gitHubService) {
        this._gitHubService = _gitHubService;
        this.errorOccured = false;
        this.user = false;
    }
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        this.user = "";
        this.repos = [];
        // this._gitHubService.getUser(this.userName).subscribe(user => {
        //   this.user = user;
        // });
        // this._gitHubService.getRepos(this.userName).subscribe(repos => {
        //   this.repos = repos;
        // })
        this._gitHubService.getUserAndRepos(this.userName)
            .subscribe(function (data) {
            _this.errorOccured = false;
            _this.user = data[0];
            _this.repos = data[1];
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: './profile.component.html'
        }), 
        __metadata('design:paramtypes', [github_service_1.GitHubApiService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map