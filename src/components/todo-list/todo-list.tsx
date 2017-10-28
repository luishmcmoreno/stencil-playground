import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.scss'
})
export class TodoList {
  @Prop() title: string;
  @State() list: string[] = ['Item 1', 'Item 2', 'Item 3'];
  @Element() element: HTMLElement;

  private addNewTask(event?: UIEvent): void {
    console.log(event);
    let newTaskInput = this.element.querySelector('#newtask') as HTMLInputElement;
    if (!newTaskInput.value) {
      return;
    }
    this.list = this.list.concat([newTaskInput.value]);
    newTaskInput.value = '';
  }

  private onKeyUp(event: KeyboardEvent): void {
    console.log(event.which);
    switch (event.which) {
      case 13:
        this.addNewTask();
        break;
    }
  }

  render() {
    return ([
    <h2>
      {this.title}
    </h2>
    ,
    <ul>
      {
        this.list.map((item) => {
          return <todo-task title={ item } completed={ false }></todo-task>
        })
      }
    </ul>,
    <input id="newtask" onKeyUp={(event: KeyboardEvent) => { this.onKeyUp(event) }} type="text" placeholder="Type a new a task" />,
    <button onClick={(event: UIEvent) => this.addNewTask(event) }> Add </button>
    ]);
  }

}