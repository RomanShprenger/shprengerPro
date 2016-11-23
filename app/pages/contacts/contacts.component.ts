import { Component } from '@angular/core';

import { ListItemComponent } from "../../components/list-item/list-item.component"

@Component({
	selector: 'contact-page',
	templateUrl: './app/pages/contacts/contacts.component.html',
	styleUrls: ['./app/pages/contacts/contacts.component.css']
})

export class ContactsComponent{
	title: string;
	name: string;
	color: string;
	list: string[];
	item: string;

	constructor(){
		this.title = 'Contact page';
		this.color = 'red';
		this.list = ["Alex", "Andrew", "John"];
	}

	ClickButton(user_text: string): void {
		switch(this.color){
			case 'red':
				this.color = "blue";		
				break;
			case 'blue':
				this.color = "green";		
				break;
			case 'green':
				this.color = "yellow";		
				break;
			case 'yellow':
				this.color = "red";		
				break;
		}

		this.list.push(user_text);

		this.name = '';
	}

	onListItemDeleted(item: string): void {
		let index = this.list.indexOf(item);
		if(index > -1){
			this.list.splice(index, 1);
		}
	}
}