import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'todo-task',
  styleUrl: 'task.scss'
})
export class TodoList {
  @Prop() title: string;
  @Prop() completed: boolean = false;
  @State() _completed: boolean = false;
  @Element() element: HTMLElement;

  private applyClass(): void {
    this._completed = !this._completed;
    const li = this.element.querySelector('li');
    if (this._completed) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');        
    }
  }

  componentDidLoad() {
    this._completed = !this._completed;
    this.applyClass();
  }


  render() {
    return (
      <li>
        <input type="checkbox" checked={ this._completed } onChange={ () => this.applyClass() } />
        {this.title}
      </li>
    );
  }

}