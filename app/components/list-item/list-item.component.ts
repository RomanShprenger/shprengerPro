import { Component,Input, Output, EventEmitter  } from "@angular/core"

@Component({
	selector: 'list-item',
	templateUrl: './app/components/list-item/list-item.component.html'
})

export class ListItemComponent{
	@Input() item: string;
	@Output() deleted = new EventEmitter();

	delete(){
		this.deleted.emit(this.item);
	}
}