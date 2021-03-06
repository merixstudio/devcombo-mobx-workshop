import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { inject, observer } from 'mobx-react';

import { TaskList } from '.';
import {
  STAGE,
  PRIORITY,
} from '../constants/task';

class TaskGroup extends Component {
  renderByState() {
    return [
      <TaskList
        key="Oczekujace"
        title="Oczekujace"
        stage={STAGE.TODO}
        tasks={this.props.taskStore.tasks.filter(task => task.stage === STAGE.TODO)}
        droppable
      />,
      <TaskList
        key="W trakcie"
        title="W trakcie"
        stage={STAGE.INPROGRESS}
        tasks={this.props.taskStore.tasks.filter(task => task.stage === STAGE.INPROGRESS)}
        droppable
      />,
      <TaskList
        key="QA"
        title="QA"
        stage={STAGE.QA}
        tasks={this.props.taskStore.tasks.filter(task => task.stage === STAGE.QA)}
        droppable
      />,
      <TaskList
        key="Zrobione"
        title="Zrobione"
        stage={STAGE.DONE}
        tasks={this.props.taskStore.tasks.filter(task => task.stage === STAGE.DONE)}
        droppable
      />,
    ];
  }

  renderByPriority() {
    return [
      <TaskList
        title="Krytyczny"
        key="Critical"
        tasks={this.props.taskStore.tasks.filter(task => task.priority === PRIORITY.CRITICAL)}
      />,
      <TaskList
        title="Wysoki"
        key="High"
        tasks={this.props.taskStore.tasks.filter(task => task.priority === PRIORITY.HIGH)}
      />,
      <TaskList
        title="Średni"
        key="Medium"
        tasks={this.props.taskStore.tasks.filter(task => task.priority === PRIORITY.MEDIUM)}
      />,
      <TaskList
        title="Niski"
        key="Low"
        tasks={this.props.taskStore.tasks.filter(task => task.priority === PRIORITY.LOW)}
      />,
    ];
  }

  render() {
    return (
      <Paper className="task-group">
        <h2>
          Zadania z podziałem na {this.props.groupByText}
        </h2>
        <div className="task-group__lists">
          {this.props.groupBy === 'priority' ?
            this.renderByPriority() :
            this.renderByState()
          }
        </div>
      </Paper>
    );
  }
}

TaskGroup.propTypes = {
  groupBy: PropTypes.string.isRequired,
  groupByText: PropTypes.string.isRequired,
  taskStore: PropTypes.shape({
    tasks: PropTypes.shape({}),
  }).isRequired,
  uiStore: PropTypes.shape({
    highlightArea: PropTypes.func,
    dropElement: PropTypes.func,
    dragElement: PropTypes.func,
    isDragging: PropTypes.bool,
    highlightedArea: PropTypes.string,
  }).isRequired,
};

export default inject(
  'taskStore',
  'uiStore',
)(observer(TaskGroup));
