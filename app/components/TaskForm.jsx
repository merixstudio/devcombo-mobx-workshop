import React from 'react';
import PropTypes from 'prop-types';

import {
  TextField,
  RaisedButton,
} from 'material-ui';

const TaskForm = ({ onSubmit }) => (
  <form
    onSubmit={onSubmit}
    autoComplete="off"
  >
    <div className="task-form__field-container">
      <TextField
        name="title"
        className="task-form__field"
        floatingLabelText="Tytuł"
        hintText="Tytuł"
      />
    </div>
    <div className="task-form__field-container">
      <TextField
        name="author"
        className="task-form__field"
        floatingLabelText="Autor"
        hintText="Autor"
      />
    </div>
    <div className="task-form__submit-container">
      <RaisedButton
        label="Stwórz"
        type="submit"
        primary
      />
    </div>
  </form>
);

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
