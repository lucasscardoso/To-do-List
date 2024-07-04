import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

@Output() public emitItemTaskList  = new EventEmitter();

ngOnInit(): void {

}


public addItemEmit: string = "";


submitItemTaskList() : void{

  this.addItemEmit = this.addItemEmit.trim();


  if(this.addItemEmit){
    this.emitItemTaskList.emit(this.addItemEmit);
    this.addItemEmit = "";
  }

}

}
