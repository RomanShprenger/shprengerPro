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
var projects_1 = require('../../shared/projects');
var GridItemComponent = (function () {
    function GridItemComponent() {
    }
    GridItemComponent.prototype.ngAfterContentInit = function () {
        this.id = this.item.id;
        this.name = this.item.name;
        this.previewImg = this.item.previewImg;
        this.technologies = this.item.technologies;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', projects_1.Projects)
    ], GridItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Number)
    ], GridItemComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', String)
    ], GridItemComponent.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', String)
    ], GridItemComponent.prototype, "previewImg", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', String)
    ], GridItemComponent.prototype, "technologies", void 0);
    GridItemComponent = __decorate([
        core_1.Component({
            selector: 'grid-item',
            templateUrl: './app/components/grid-item/grid-item.component.html',
            styleUrls: ['./app/components/grid-item/grid-item.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GridItemComponent);
    return GridItemComponent;
}());
exports.GridItemComponent = GridItemComponent;
//# sourceMappingURL=grid-item.component.js.map