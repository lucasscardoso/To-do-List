import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{



ngOnInit(): void {

}

pressEnter(event: KeyboardEvent){

if(event.key == 'Enter'){

  console.log('deu bom!');
}


}

}
