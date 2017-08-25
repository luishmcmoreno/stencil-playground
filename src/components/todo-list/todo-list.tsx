import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.scss'
})
export class TodoList {
  @Prop() title: string;
  @State() list: string[] = ['Item 1', 'Item 2', 'Item 3'];
  @Element() element: HTMLElement;

  private addNewTask(event: UIEvent): void {
    console.log(event);
    let newTaskInput = this.element.querySelector('#newtask') as HTMLInputElement;
    if (!newTaskInput.value) {
      return;
    }
    this.list = this.list.concat([newTaskInput.value]);
    newTaskInput.value = '';
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
          return <li> {item} </li>
        })
      }
    </ul>,
    <input id="newtask" type="text" placeholder="Type a new a task" />,
    <button onClick={(event: UIEvent) => this.addNewTask(event) }> Add </button>
    ]);
  }

}