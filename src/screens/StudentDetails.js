import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents, editStudent } from '../actions/studentActions';
import PropTypes from 'prop-types';
import Stepper from '../components/Stepper';
import { Button } from 'reactstrap';
import { v4 as uuid } from 'uuid';

import 'bootstrap/dist/css/bootstrap.min.css';

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDetails: {},
    };
  }

  componentDidMount() {
    this.props.getStudents();
  }

  handleAddStudent = () => {
    const { students } = this.props.student;

    // console.log(students[1].id);

    const studentEdit = {
      id: students[1].id,
      name: 'Chagan',
      currentRound: 4,
      status: 'accept',
    };
    this.setState({ newDetails: studentEdit }, () =>
      console.log('Student Edit: ' + this.state.newDetails)
    );

    // this.props.editStudent(students[1].id, studentEdit);
  };

  render() {
    const { students } = this.props.student;
    // Fetch request to get the number of steps in workflow with their names for that particular student
    return (
      <div>
        {students.map(({ name, currentRound, status }, index) => (
          <ul>
            <li style={{ display: 'inline', padding: '10%' }}>{index + 1}</li>
            <li style={{ display: 'inline', padding: '10%' }}>{name}</li>
            <li style={{ display: 'inline', padding: '10%' }}>
              {currentRound}
            </li>
            <li style={{ display: 'inline', padding: '10%' }}>{status}</li>
          </ul>
        ))}
        <Stepper
          steps={[
            { title: 'Step One' },
            { title: 'Step Two' },
            { title: 'Step Three' },
            { title: 'Step Four' },
            { title: 'Step Five' },
          ]}
          activeStep={1}
        />
        <Button color='primary' onClick={() => this.handleAddStudent()}>
          Add Student
        </Button>
      </div>
    );
  }
}

StudentDetails.protoTypes = {
  getStudents: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  student: state.student,
});

export default connect(mapStateToProps, { getStudents, editStudent })(
  StudentDetails
);
