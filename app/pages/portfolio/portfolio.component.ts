import { Component, OnInit } from '@angular/core';
import { GridItemComponent } from "../../components/grid-item/grid-item.component";
import { Projects } from '../../shared/projects';

import { ProjectService } from '../../services/project.service';

@Component({
	selector: 'portfolio-page',
	templateUrl: './app/pages/portfolio/portfolio.component.html',
	styleUrls: ['./app/pages/portfolio/portfolio.component.css'],
	providers: [ProjectService]
})


export class PortfolioComponent implements OnInit {
	title: string;
	projects: Projects[];
	item: Projects;

	constructor(
		private projectService: ProjectService
		){
		this.title = "My projects";
	}

	getProjects() :void {
		this.projectService
				.getProjectList()
				.then(projects => this.projects = projects);
	}

	ngOnInit(): void {
    this.getProjects();
  }
}