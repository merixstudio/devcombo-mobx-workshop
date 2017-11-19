import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { ChangePriority } from '.';
import { STAGE } from '../constants/task';

const Task = ({
  task,
  draggable,
  onDrag,
}) => (
  <div
    draggable={draggable}
    onDragStart={() => onDrag(task)}
    className={`
      task
      task--${task.stage.toLowerCase()}
      task--${task.priority.toLowerCase()}
    `}
  >
    <h3 className="task__name">
      { task.title }
    </h3>
    <p className="task__stage">
      Stage: { task.stage }
    </p>
    { task.stage !== STAGE.DONE ? [
      <ChangePriority
        key="changePriority"
        task={task}
      />,
      <p key="author" className="task__author">
        Author: {task.author}
      </p>,
    ] : (
      <p className="task__date">
        {task.changeDate.toLocaleString()}
      </p>
    )}
    <button
      className="task__delete"
      onClick={() => task.delete()}
    >
      X
    </button>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    stage: PropTypes.string,
    priority: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  draggable: PropTypes.bool,
  onDrag: PropTypes.func,
};

Task.defaultProps = {
  draggable: false,
  onDrag: () => {},
};

export default observer(Task);
