import {
  observable,
  action,
} from 'mobx';

class UIStore {
  @observable isDialogOpen = false;

  @action changeDialog(isOpen) {
    this.isDialogOpen = isOpen;
  }
}

export default UIStore;
