import React, { Component } from 'react';
import {
  TaskGroup,
  AddTask,
  Header,
} from '.';

import { tasks } from '../constants/initial-data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__container">
          <div className="app__row">
            <div className="app__column">
              <TaskGroup
                groupBy="stage"
                groupByText="etap"
                tasks={tasks}
              />
            </div>
            <div className="app__column">
              <TaskGroup
                groupBy="priority"
                groupByText="priorytet"
                tasks={tasks}
              />
            </div>
          </div>
          <AddTask />
        </div>
      </div>
    );
  }
}


export default App;
