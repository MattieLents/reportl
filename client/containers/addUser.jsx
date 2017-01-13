import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../actions/index'; // needs to be written

const UserForm = ({ handleSubmit }) => (
  <div className="form">
    <h2 className="formTitle">Create User</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="firstName">First Name</label>
        <Field className="field" name="firstName" component="input" type="text" />
      </div>
      <div>
        <label className="label" htmlFor="lastName">Last Name</label>
        <Field className="field" name="lastName" component="input" type="text" />
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <Field className="field" name="email" component="input" type="email" />
      </div>
      <div>
        <label className="label" htmlFor="type_id"> Student</label>
        <Field className="radioButton" name="type_id" component="input" type="radio" value="1" />
        <label className="label" htmlFor="type_id"> Teacher</label>
        <Field className="radioButton" name="type_id" component="input" type="radio" value="2" />
      </div>
      <button className="formButton" type="submit">Submit</button>
    </form>
  </div>
);

UserForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const UserFormMaker = reduxForm({
  form: 'addUser',
  onSubmit: createUser,
})(UserForm);

export default UserFormMaker;
