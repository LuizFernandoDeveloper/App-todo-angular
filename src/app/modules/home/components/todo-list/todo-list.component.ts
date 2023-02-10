import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    {task:"Minha nova task um", checked: true},
    {task:"Minha segunda tesk", checked: false },
    {task:"Minha terceira tesk", checked: true }

  ];
  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }
  public deleteAllitemOfTaskList(){
    
    const confirm = window.confirm("Você realmente, deseja deletar tudo?");

    if(confirm){
      this.taskList = [];
    }
    
  }

}
