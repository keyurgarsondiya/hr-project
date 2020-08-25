import { GET_STUDENTS, DELETE_STUDENT, EDIT_STUDENT } from './types';

export const getStudents = () => {
  return {
    type: GET_STUDENTS,
  };
};

export const editStudent = (id, student) => {
  console.log('Id: ' + id + ' Student: ' + student);
  return {
    type: EDIT_STUDENT,
    payload: { id, student },
  };
};
