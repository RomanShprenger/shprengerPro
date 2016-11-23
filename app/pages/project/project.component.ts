import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Projects } from '../../shared/projects';
import { ProjectService } from '../../services/project.service';

@Component({
	selector: 'project-page',
	templateUrl: './app/pages/project/project.component.html',
	styleUrls: ['./app/pages/project/project.component.css'],
  providers: [ProjectService]
})


export class ProjectComponent implements OnInit{
	project: Projects;
  imageSrc: string = '';
	id: number;
	name: string;
	desc: string;
  technologies: string;
  link: string;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {

    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.getProject(this.id);
    });
  }


  getProject(id) :void {
    this.projectService
      .getProject(id)
      .then(project => {
        this.name = project.name,
        this.imageSrc = project.imageSrc,
        this.desc = project.description
        this.technologies = project.technologies;
        this.link = project.link;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.getProject(this.id);
    });
  }
}