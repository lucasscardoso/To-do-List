import { Component, OnInit, EventEmitter, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

constructor(){}

ngDoCheck() {
  this.setLocalStorage();
}

public setEmitTaskList(event:string){
  this.taskList.push({task: event, checked: false});
}

public deleteItemTaskList(event: number){
  this.taskList.splice(event,1);
}

public deleteAll(){

  const confirm = window.confirm("Você deseja realmente deletar tudo?")
  this.taskList = [];
}

public validationIput(event: string , index: number){
  if(!event.length){
    const confirm = window.confirm("A tarefa esta vazia! você deseja realmente excluir essa tarefa?");

     if(confirm){
    this.deleteItemTaskList(index);
    }
  }

}

public setLocalStorage(){

  if(this.taskList){
    this.taskList.sort((first,last) => Number(first.checked) - Number(last.checked));
     localStorage.setItem("list",JSON.stringify(this.taskList) );
  }
}


}
