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
require('owl-carousel');
var OwlCarousel = (function () {
    function OwlCarousel(el) {
        this.el = el;
        this.defaultClass = 'owl-carousel';
        this.defaultOptions = {};
    }
    OwlCarousel.prototype.ngAfterViewInit = function () {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        this.$owlElement = jQuery(this.el.nativeElement).owlCarousel(this.defaultOptions);
    };
    OwlCarousel.prototype.ngOnDestroy = function () {
        this.$owlElement.trigger('destroy.owl.carousel');
        this.$owlElement = null;
    };
    __decorate([
        core_1.HostBinding('class'), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "defaultClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: "<ng-content></ng-content>",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=slider.component.js.map