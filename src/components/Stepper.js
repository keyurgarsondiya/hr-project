import React from 'react';
import { Component } from 'react';
import ReactStepper from 'react-stepper-horizontal';

// The Stepper works with indexing zero

class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      steps: [],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
    // this.onClickPrevious = this.onClickPrevious.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        steps: this.props.steps,
        currentStep: this.props.activeStep,
      },
      console.log('Current Step: ' + this.state.currentStep)
    );
  }

  onClickNext() {
    const { currentStep, steps } = this.state;
    console.log('Steps size: ' + steps.length);
    if (currentStep < steps.length) {
      this.setState(
        {
          currentStep: currentStep + 1,
        },
        () => console.log('Current Step: ' + this.state.currentStep)
      );
    } else {
      console.log('Congrats!!! Student Selected');
    }
  }

  //   onClickPrevious() {
  //     // console.log('Current State: ' + this.state.currentStep);
  //     const { currentStep } = this.state;
  //     if (currentStep >= 1) {
  //       this.setState(
  //         {
  //           currentStep: currentStep - 1,
  //         },
  //         () => console.log('Current Step: ' + this.state.currentStep)
  //       );
  //     }
  //   }

  render() {
    const { steps, currentStep } = this.state;
    console.log('Current Step Render: ' + currentStep);
    return (
      <div>
        <ReactStepper steps={steps} activeStep={currentStep - 1} />
        {/* The Stepper works with indexing zero */}
        {/* <div style={styles.buttonStyle} onClick={this.onClickPrevious}>
          Previous
        </div> */}
        <div style={styles.buttonStyle} onClick={this.onClickNext}>
          Next
        </div>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    background: '#E0E0E0',
    width: 200,
    padding: 16,
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 32,
  },
};

export default Stepper;
