import {
  observable,
  action,
} from 'mobx';

class UIStore {
  @observable isDialogOpen = false;
  @observable draggedElement = null;
  @observable isDragging = false;
  @observable draggingOver = null;

  @action changeDialog(isOpen) {
    this.isDialogOpen = isOpen;
  }

  @action dropElement() {
    this.draggedElement = null;
    this.isDragging = false;
  }

  @action dragOver(el) {
    this.draggingOver = el;
  }

  @action dragElement(element) {
    this.draggedElement = element;
    this.isDragging = true;
  }
}

export default UIStore;
