import { GET_STUDENTS, DELETE_STUDENT, EDIT_STUDENT } from './types';

export const getStudents = () => {
  return {
    type: GET_STUDENTS,
  };
};

export const editStudent = (student) => {
  // console.log('Id: ' + id + ' Student: ' + student);
  console.log('Student: ', student);
  return {
    type: EDIT_STUDENT,
    payload: student,
  };
};
