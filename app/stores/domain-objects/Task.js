import {
  observable,
  action,
} from 'mobx';

class Task {
  @observable priority;
  @observable stage;

  constructor(taskStore, plainTask) {
    this.taskStore = taskStore;
    Object.entries(plainTask).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  @action changePriority(priority) {
    this.priority = priority;
  }

  @action changeStage(stage) {
    this.stage = stage;
  }

  delete() {
    this.taskStore.deleteTask(this);
  }
}

export default Task;
