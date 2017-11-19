import { observable } from 'mobx';

class TaskStore {
  @observable tasks = [];

  constructor(initialTasks = []) {
    this.tasks = initialTasks;
  }
}

export default TaskStore;
