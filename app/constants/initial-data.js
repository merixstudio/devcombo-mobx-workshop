import {
  STAGE,
  PRIORITY,
} from './task';

export const tasks = [
  {
    id: 1,
    author: 'PM',
    title: 'Forward emails',
    stage: STAGE.INPROGRESS,
    priority: PRIORITY.HIGH,
    changeDate: new Date(),
  },
  {
    id: 2,
    author: 'Arnold',
    title: 'Resolve merge conflicts',
    stage: STAGE.QA,
    priority: PRIORITY.CRITICAL,
    changeDate: new Date(),
  },
  {
    id: 3,
    author: 'Arnold',
    title: 'Find project founding',
    stage: STAGE.DONE,
    priority: PRIORITY.LOW,
    changeDate: new Date(),
  },
  {
    id: 4,
    author: 'Brad',
    title: 'Code review',
    stage: STAGE.TODO,
    priority: PRIORITY.LOW,
    changeDate: new Date(),
  },
];
