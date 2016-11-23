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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var skills_component_1 = require('./pages/skills/skills.component');
var project_component_1 = require('./pages/project/project.component');
var portfolio_component_1 = require('./pages/portfolio/portfolio.component');
var contacts_component_1 = require('./pages/contacts/contacts.component');
var list_item_component_1 = require('./components/list-item/list-item.component');
var grid_item_component_1 = require('./components/grid-item/grid-item.component');
var diagram_component_1 = require('./components/diagram/diagram.component');
var slider_component_1 = require('./components/slider/slider.component');
var project_service_1 = require('./services/project.service');
var skills_service_1 = require('./services/skills.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: 'skills',
                        pathMatch: 'full'
                    },
                    {
                        path: 'portfolio/:id',
                        component: project_component_1.ProjectComponent
                    },
                    {
                        path: 'skills',
                        component: skills_component_1.SkillsComponent
                    },
                    {
                        path: 'portfolio',
                        component: portfolio_component_1.PortfolioComponent
                    },
                    {
                        path: 'contacts',
                        component: contacts_component_1.ContactsComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                skills_component_1.SkillsComponent,
                project_component_1.ProjectComponent,
                portfolio_component_1.PortfolioComponent,
                contacts_component_1.ContactsComponent,
                list_item_component_1.ListItemComponent,
                grid_item_component_1.GridItemComponent,
                diagram_component_1.DiagramComponent,
                slider_component_1.OwlCarousel
            ],
            providers: [
                project_service_1.ProjectService,
                skills_service_1.SkillService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map