import React from 'react';
import PropTypes from 'prop-types';

import { PRIORITY } from '../constants/task';

const prioritiesList = Object.values(PRIORITY);

const ChangePriority = ({ task }) => (
  <ul className="change-priority">
    { prioritiesList.map(priority => (
      <li
        key={priority}
        className={`change-priority__item change-priority__item--${priority.toLowerCase()}`}
      >
        <button
          className="change-priority__button"
          onClick={() => {}}
          disabled={task.priority === priority}
        />
      </li>
    ))}
  </ul>
);

ChangePriority.propTypes = {
  task: PropTypes.shape({}).isRequired,
};

export default ChangePriority;
