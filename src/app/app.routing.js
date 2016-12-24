"use strict";
var router_1 = require('@angular/router');
var tasks_component_1 = require('./task/tasks.component');
var addtask_component_1 = require('./task/addtask.component');
var home_component_1 = require('./home/home.component');
var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'tasks', component: tasks_component_1.TasksComponent },
    { path: 'addtask', component: addtask_component_1.AddtaskComponent }
];
exports.app_routing = router_1.RouterModule.forRoot(app_routes);
//# sourceMappingURL=app.routing.js.map