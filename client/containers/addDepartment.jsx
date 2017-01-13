import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createDepartment } from '../actions/index';

const createDepartmentForm = ({ handleSubmit }) => (
  <div className="form">
    <h2 className="formTitle">Create Department</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="name">Name</label>
        <Field className="field" name="Name" component="input" type="text" />
      </div>
      <button className="formButton" type="submit">Submit</button>
    </form>
  </div>
);

createDepartmentForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const DepartmentFormMaker = reduxForm({
  form: 'addDepartment',
  onSubmit: createDepartment,
})(createDepartmentForm);

export default DepartmentFormMaker;
