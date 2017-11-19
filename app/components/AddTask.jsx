import React, { Component } from 'react';
import {
  observer,
  inject,
} from 'mobx-react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Dialog,
} from 'material-ui';

import { TaskForm } from '.';

class AddTask extends Component {
  constructor() {
    super();
    this.onTaskCreation = this.onTaskCreation.bind(this);
  }

  onTaskCreation(event) {
    event.preventDefault();
    const author = event.target.author;
    const title = event.target.title;
    if (title.value && author.value) {
      this.props.taskStore.addTask(title.value, author.value);
      this.props.uiStore.changeDialog(false);
      title.value = '';
      author.value = '';
    }
  }

  render() {
    return (
      <div className="add-task">
        <IconButton
          iconClassName="material-icons add-task__button-icon"
          className="add-task__button"
          onClick={() => this.props.uiStore.changeDialog(true)}
        >
          add
        </IconButton>
        <Dialog
          open={this.props.uiStore.isDialogOpen}
          onRequestClose={() => this.props.uiStore.changeDialog(false)}
          contentClassName="add-task__dialog"
        >
          <TaskForm
            onSubmit={this.onTaskCreation}
          />
        </Dialog>
      </div>
    );
  }
}

AddTask.propTypes = {
  uiStore: PropTypes.shape({
    isDialogOpen: PropTypes.bool,
    changeDialog: PropTypes.func,
  }).isRequired,
  taskStore: PropTypes.shape({
    addTask: PropTypes.func,
  }).isRequired,
};

export default inject(
  'uiStore',
  'taskStore',
)(observer(AddTask));
