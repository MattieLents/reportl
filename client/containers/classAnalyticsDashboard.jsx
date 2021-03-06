import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RenderGradeChartByUser from '../components/render_grade_graph_by_user';
import RenderAreaChart from '../components/render_area_chart';
import { getChartData, setSelectedClass } from '../actions/index';

const classes = ['American Literature', 'Pre-Algebra', 'Biology 1', 'Biology 2', 'Spanish'];

class classAnalyticsDashboard extends Component {

  componentWillMount() {
    if (!this.props.gradeData) {
      this.props.getChartData();
    }
  }

  render() {
    return (
      <div>
        <p>Select Class</p>
        <div>
          {classes.map(classItem => (
            <button
              onClick={() => { this.props.setSelectedClass(classItem); }}
            >
              {classItem}
            </button>
          ))}</div>
        <div>
          <h2>Grades for {this.props.selectedClassGraph}</h2>
          <RenderAreaChart />
          <RenderGradeChartByUser />
        </div>
      </div>
    );
  }
}

classAnalyticsDashboard.propTypes = {
  selectedClassGraph: React.PropTypes.string,
  getChartData: React.PropTypes.func,
  setSelectedClass: React.PropTypes.func,
  gradeData: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedClass, getChartData }, dispatch);
}

function mapStateToProps(state) {
  return {
    gradeData: state.gradeData,
    selectedClassGraph: state.selectedClassGraph,
    selectedUserGraph: state.selectedUserGraph,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(classAnalyticsDashboard);
