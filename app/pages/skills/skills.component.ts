import { Component, OnInit } from '@angular/core';
import { DiagramComponent } from "../../components/diagram/diagram.component";
import { Diagram } from '../../shared/diagram';

import { SkillService } from '../../services/skills.service';

@Component({
	selector: 'skills-page',
	templateUrl: '/app/pages/skills/skills.component.html',
	styleUrls: ['app/pages/skills/skills.component.css'],
	providers: [SkillService]
})

export class SkillsComponent implements OnInit {
  skills: Diagram[];
  skill: Diagram;

  constructor(private skillService: SkillService){}

	getSkills() :void {
		this.skillService
				.getSkillList()
				.then(skills => this.skills = skills);
	}

	ngOnInit(): void {
    this.getSkills();
  }

}