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
var ContactsComponent = (function () {
    function ContactsComponent() {
        this.title = 'Contact page';
        this.color = 'red';
        this.list = ["Alex", "Andrew", "John"];
    }
    ContactsComponent.prototype.ClickButton = function (user_text) {
        switch (this.color) {
            case 'red':
                this.color = "blue";
                break;
            case 'blue':
                this.color = "green";
                break;
            case 'green':
                this.color = "yellow";
                break;
            case 'yellow':
                this.color = "red";
                break;
        }
        this.list.push(user_text);
        this.name = '';
    };
    ContactsComponent.prototype.onListItemDeleted = function (item) {
        var index = this.list.indexOf(item);
        if (index > -1) {
            this.list.splice(index, 1);
        }
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contact-page',
            templateUrl: './app/pages/contacts/contacts.component.html',
            styleUrls: ['./app/pages/contacts/contacts.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map