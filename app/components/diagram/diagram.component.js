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
var core_1 = require("@angular/core");
var diagram_1 = require('../../shared/diagram');
var DiagramComponent = (function () {
    function DiagramComponent() {
    }
    DiagramComponent.prototype.ngAfterContentInit = function () {
        this.name = this.skill.name;
        this.level = this.skill.level;
        this.passion = this.skill.passion;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', diagram_1.Diagram)
    ], DiagramComponent.prototype, "skill", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', String)
    ], DiagramComponent.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Number)
    ], DiagramComponent.prototype, "level", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Number)
    ], DiagramComponent.prototype, "passion", void 0);
    DiagramComponent = __decorate([
        core_1.Component({
            selector: 'diagram',
            templateUrl: './app/components/diagram/diagram.component.html',
            styleUrls: ['./app/components/diagram/diagram.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DiagramComponent);
    return DiagramComponent;
}());
exports.DiagramComponent = DiagramComponent;
//# sourceMappingURL=diagram.component.js.map