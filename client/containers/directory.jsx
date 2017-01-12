import React from 'react';
import Teachers from '../components/render_teachers';
import Students from '../components/render_students';

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
};

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
    this.state = {
      viewNow: 'Students',
    };
  }

  switchView(viewName) {
    this.setState({ viewNow: viewName });
  }

  currentView() {
    if (this.state.viewNow === 'Students') {
      return <Students />;
    }

    if (this.state.viewNow === 'Teachers') {
      return <Teachers />;
    }

    return false;
  }

  render() {
    return (
      <div>
        <div style={buttonContainer}>
          <button className="defaultButton" onClick={() => this.switchView('Students')}>Students</button>
          <button className="defaultButton" onClick={() => this.switchView('Teachers')}>Teachers</button>
        </div>
        <div className="defaultContainer">
          {this.currentView()}
        </div>
      </div>
    );
  }
}

export default Directory;
