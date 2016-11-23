import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';

import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectComponent } from './pages/project/project.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { OwlCarousel } from './components/slider/slider.component';
import { ProjectService } from './services/project.service';
import { SkillService } from './services/skills.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  	RouterModule.forRoot([
  		{
  			path: '',
  			redirectTo: 'skills',
  			pathMatch: 'full'
  		},
  		{
			  path: 'portfolio/:id',
			  component: ProjectComponent
			},
  		{
				path: 'skills',
				component: SkillsComponent
			},
			{
			  path: 'portfolio',
			  component: PortfolioComponent
			},
      {
        path: 'contacts',
        component: ContactsComponent
      }
		])
  ],
  declarations: [ 
  	AppComponent ,
    SkillsComponent,
  	ProjectComponent,
  	PortfolioComponent,
    ContactsComponent,
    ListItemComponent,
    GridItemComponent,
    DiagramComponent,
    OwlCarousel
  ],
  providers: [
    ProjectService,
    SkillService
  ],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
