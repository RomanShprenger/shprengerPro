import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Projects } from '../shared/projects';
// import { PROJECTS } from '../mocks/mock-projects';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {
	private projectsUrl = 'app/projects'

	constructor(private http: Http){ }

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

  getProjectList(): Promise<Projects[]> {
    return this.http.get(this.projectsUrl)
    								.toPromise()
    								.then(response => response.json().data as Projects[])
    								.catch(this.handleError);
  }

  getProject(id: number): Promise<Projects> {
    return this.getProjectList()
              .then(projects => projects.filter(project => project.id == id)[0]);
  }
}