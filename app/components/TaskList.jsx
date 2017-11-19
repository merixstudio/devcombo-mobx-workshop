import React from 'react';
import PropTypes from 'prop-types';

import { Task } from '.';

const TaskList = ({
  tasks,
  title,
  stage,
}) => (
  <div
    className={`task-list ${stage ? `task-list--${stage.toLowerCase()}` : ''}`}
  >
    <h3 className="task-list__title">
      {title}
    </h3>
    <ul className="task-list__list" >
      {tasks.map(task => (
        <li key={task.id} className="task-list__element">
          <Task task={task} />
        </li>
      ))}
    </ul>
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  title: PropTypes.string.isRequired,
  stage: PropTypes.string,
};

TaskList.defaultProps = {
  stage: null,
};
export default TaskList;
