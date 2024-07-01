import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

public taskList: Array<TaskList> = [
  {task : "minhas primeira task", checked : true},
  {task : "minhas primeira segunda", checked : false}

];

constructor(){}

ngOnInit(): void {

}

public deleteItemTaskList(event: number){
  this.taskList.splice(event,1);
}

public deleteAll(){

  const confirm = window.confirm("Você deseja realmente deletar tudo?")
  this.taskList = [];
}



}
