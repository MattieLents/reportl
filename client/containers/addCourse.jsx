import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createCourse } from '../actions/index';

const CourseForm = ({ handleSubmit }) => (
  <div className="form">
    <h2 className="formTitle">Create Course</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="name">Name</label>
        <Field className="field" name="name" component="input" type="text" />
      </div>
      <div>
        <label className="label" htmlFor="description">Description</label>
        <Field className="field" name="description" component="input" type="text" />
      </div>
      <div>
        <label className="label" htmlFor="department_id">Department Id</label>
        <Field className="field" name="department_id" component="input" type="number" />
      </div>
      <button className="formButton" type="submit">Submit</button>
    </form>
  </div>
);

CourseForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const CourseFormMaker = reduxForm({
  form: 'addCourse',
  onSubmit: createCourse,
})(CourseForm);

export default CourseFormMaker;
