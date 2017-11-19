import {
  observable,
  action,
  autorun,
} from 'mobx';

import Task from './domain-objects/Task';

import {
  STAGE,
  PRIORITY,
} from '../constants/task';

class TaskStore {
  @observable tasks = [];

  constructor() {
    const stored = JSON.parse(localStorage.getItem('tasks'));
    this.tasks = stored ? stored.map(taskString => new Task(this, taskString)) : [];
    autorun(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    });
  }

  @action deleteTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  @action addTask(title, author) {
    this.tasks.push(new Task(this, {
      id: this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      title,
      author,
      priority: PRIORITY.MEDIUM,
      stage: STAGE.TODO,
      changeDate: new Date(),
    }));
  }
}

export default TaskStore;
