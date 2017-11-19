import React, { Component } from 'react';
import {
  IconButton,
  Dialog,
} from 'material-ui';

import { TaskForm } from '.';

class AddTask extends Component {
  constructor() {
    super();
    this.state = { open: false };

    this.onTaskCreation = this.onTaskCreation.bind(this);
  }

  onTaskCreation(event) {
    event.preventDefault();
    console.log(event.target.author.value, event.target.title.value);
  }

  render() {
    return (
      <div className="add-task">
        <IconButton
          iconClassName="material-icons add-task__button-icon"
          className="add-task__button"
          onClick={() => this.setState({ open: true })}
        >
          add
        </IconButton>
        <Dialog
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
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

export default AddTask;
