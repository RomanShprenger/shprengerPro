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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var project_service_1 = require('../../services/project.service');
var ProjectComponent = (function () {
    function ProjectComponent(projectService, route, location) {
        var _this = this;
        this.projectService = projectService;
        this.route = route;
        this.location = location;
        this.imageSrc = '';
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
            _this.getProject(_this.id);
        });
    }
    ProjectComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectService
            .getProject(id)
            .then(function (project) {
            _this.name = project.name,
                _this.imageSrc = project.imageSrc,
                _this.desc = project.description;
            _this.technologies = project.technologies;
            _this.link = project.link;
        });
    };
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
            _this.getProject(_this.id);
        });
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project-page',
            templateUrl: './app/pages/project/project.component.html',
            styleUrls: ['./app/pages/project/project.component.css'],
            providers: [project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.ActivatedRoute, common_1.Location])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map