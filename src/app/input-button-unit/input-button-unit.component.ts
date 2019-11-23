import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  {{title}}
<input class="todo-input"
#inputElementRef
[value] = "title"
(keyup.enter)="submitValue($event.target.value)" 
      >
<button class="btn" (click) = "submitValue(inputElementRef.value)">Save</button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title: string;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.title = "Hello World";

  }
  ngOnInit() {

  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  // changeTitle(event): void {
  //   console.log(event);
  //   this.title = event.target.value; // the original functionality still works
  // }


}
