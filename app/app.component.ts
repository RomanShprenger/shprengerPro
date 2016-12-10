import { Component } from '@angular/core'
import { SkillsComponent } from './pages/skills/skills.component'
import { PortfolioComponent } from './pages/portfolio/portfolio.component'
import { ProjectComponent } from './pages/project/project.component'
import { ContactsComponent } from './pages/contacts/contacts.component'

import { ProjectService } from './services/project.service'
import { SkillService } from './services/skills.service'

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	providers: [ProjectService, SkillService],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})

export class AppComponent{
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

	constructor(){
  }

	updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }
}