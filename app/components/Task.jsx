import React from 'react';
import PropTypes from 'prop-types';

import { ChangePriority } from '.';
import { STAGE } from '../constants/task';

const Task = ({ task }) => (
  <div
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
      onClick={() => {}}
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
};

export default Task;
