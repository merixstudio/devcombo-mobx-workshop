import { observable } from 'mobx';

import Task from './domain-objects/Task';

class TaskStore {
  @observable tasks = [];

  constructor(initialTasks = []) {
    this.tasks = initialTasks.map(plainTask => new Task(plainTask));
  }
}

export default TaskStore;
