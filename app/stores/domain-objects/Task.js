import {
  observable,
  action,
} from 'mobx';

class Task {
  @observable priority;
  @observable stage;

  constructor(plainTask) {
    Object.entries(plainTask).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  @action changePriority(priority) {
    this.priority = priority;
  }
}

export default Task;
