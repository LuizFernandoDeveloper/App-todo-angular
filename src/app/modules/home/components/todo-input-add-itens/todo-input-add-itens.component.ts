import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskLid: string = "";
  

  constructor() { }

  ngOnInit(): void {

  }


  public submitItemTaskList() {
    if(this.addItemTaskLid.trim().length >= 1){
      this.emitItemTaskList.emit(this.addItemTaskLid.trim());
      this.addItemTaskLid = "";
    }
  }
}
