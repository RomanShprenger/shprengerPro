import { Component, Input, Output } from "@angular/core"
import { Projects } from '../../shared/projects';

@Component({
	selector: 'grid-item',
	templateUrl: './app/components/grid-item/grid-item.component.html',
	styleUrls: ['./app/components/grid-item/grid-item.component.css']
})

export class GridItemComponent{
	@Input() item: Projects;
	@Output() id: number;
	@Output() name: string;
	@Output() previewImg: string;
	@Output() technologies: string;

	ngAfterContentInit(){
		this.id = this.item.id;
		this.name = this.item.name;
		this.previewImg = this.item.previewImg;
		this.technologies = this.item.technologies;
	}

}