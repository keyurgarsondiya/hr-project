import { v4 as uuid } from 'uuid';
import {
  GET_STUDENTS,
  DELETE_STUDENT,
  LOADING,
  EDIT_STUDENT,
} from '../actions/types';

const initialState = {
  students: [
    { id: uuid(), name: 'Rohan', currentRound: 4, status: 'accept' },
    { id: uuid(), name: 'Rahul', currentRound: 2, status: 'accept' },
    { id: uuid(), name: 'Mohan', currentRound: 3, status: 'reject' },
    { id: uuid(), name: 'Sohan', currentRound: 1, status: 'reject' },
  ],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
      };
    case EDIT_STUDENT:
      return {
        ...state,
        students: () => {
          let id = state.students.findIndex(action.payload.id);
          state.students[id] = action.payload.student;
          return state.students;
        },
      };
    default:
      return state;
  }
}
