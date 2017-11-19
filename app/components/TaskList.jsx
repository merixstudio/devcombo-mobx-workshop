import React, { Component } from 'react';
import {
  inject,
  observer,
} from 'mobx-react';
import PropTypes from 'prop-types';

import { Task } from '.';

class TaskList extends Component {
  constructor() {
    super();

    this.state = {
      dragOver: false,
    };

    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  onDragOver(event) {
    const task = this.props.uiStore.draggedElement;
    if (task.stage !== this.props.stage) {
      this.props.uiStore.dragOver(this);
      event.preventDefault();
    }
  }

  onDrop() {
    if (this.props.uiStore.isDragging) {
      const task = this.props.uiStore.draggedElement;
      this.props.uiStore.dropElement();
      this.setState({ dragOver: false });
      task.changeStage(this.props.stage);
      this.props.uiStore.dragOver(null);
    }
  }

  onDrag(task) {
    this.props.uiStore.dragElement(task);
  }

  render() {
    const {
      tasks,
      title,
      stage,
      droppable,
    } = this.props;

    return (
      <div
        onDragOver={droppable ? this.onDragOver : undefined}
        onDrop={droppable ? this.onDrop : undefined}
        className={`
          task-list
          ${stage ? `task-list--${stage.toLowerCase()}` : ''}
          ${this.props.uiStore.draggingOver === this ? 'task-list--highlighted-strong' : ''}
        `}
      >
        <h3 className="task-list__title">
          {title}
        </h3>
        <ul className="task-list__list" >
          {tasks.map(task => (
            <li key={task.id} className="task-list__element">
              <Task
                task={task}
                draggable={droppable}
                onDrag={this.onDrag}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  title: PropTypes.string.isRequired,
  stage: PropTypes.string,
  droppable: PropTypes.bool,
  uiStore: PropTypes.shape({
    dragOver: PropTypes.func,
    dragElement: PropTypes.func,
    dropElement: PropTypes.func,
    isDragging: PropTypes.bool,
    draggingOver: PropTypes.el,
    draggedElement: PropTypes.shape({}),
  }).isRequired,
};

TaskList.defaultProps = {
  stage: null,
  droppable: false,
};
export default inject('uiStore')(observer(TaskList));
