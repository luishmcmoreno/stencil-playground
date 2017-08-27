import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'todo-task',
  styleUrl: 'task.scss'
})
export class TodoList {
    @Prop() title: string;
    @Prop() completed: boolean = false;
    @Element() element: HTMLElement;

  render() {
    return (
      <li class={ this.completed ? 'completed' : 'todo' }>
        <input type="checkbox" checked={ this.completed } />
        {this.title}
      </li>
    );
  }

}