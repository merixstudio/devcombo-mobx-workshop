import {
  observable,
  action,
} from 'mobx';

import Task from './domain-objects/Task';

import {
  STAGE,
  PRIORITY,
} from '../constants/task';

class TaskStore {
  @observable tasks = [];

  constructor(initialTasks = []) {
    this.tasks = initialTasks.map(plainTask => new Task(this, plainTask));
  }

  @action deleteTask(task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  @action addTask(title, author) {
    this.tasks.push(new Task(this, {
      id: this.tasks[this.tasks.length - 1].id + 1,
      title,
      author,
      priority: PRIORITY.MEDIUM,
      stage: STAGE.TODO,
    }));
  }
}

export default TaskStore;
