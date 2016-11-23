import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Diagram } from '../shared/diagram';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SkillService {
	private projectsUrl = 'app/skills'

	constructor(private http: Http){ }

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}

  getSkillList(): Promise<Diagram[]> {
    return this.http.get(this.projectsUrl)
    								.toPromise()
    								.then(response => response.json().data as Diagram[])
    								.catch(this.handleError);
  }
}