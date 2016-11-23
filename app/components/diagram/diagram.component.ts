import { Component, Input, Output } from "@angular/core"
import { Diagram } from '../../shared/diagram';

@Component({
	selector: 'diagram',
	templateUrl: './app/components/diagram/diagram.component.html',
	styleUrls: ['./app/components/diagram/diagram.component.css']
})

export class DiagramComponent{
	@Input() skill: Diagram;
	@Output() name: string;
	@Output() level: number;
	@Output() passion: number;
	
	ngAfterContentInit(){
		this.name= this.skill.name;
		this.level = this.skill.level;
		this.passion = this.skill.passion;
	}
}