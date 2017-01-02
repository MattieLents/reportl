import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createProfileInformation } from '../actions/index';

const UpdateProfile = ({ handleSubmit }) => (
  <div>
    <h2>Profile</h2>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label htmlFor="id">User ID</label>
        <Field name="id" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="Profile Photo">Profile Photo</label>
        <Field name="imgUrl" component="input" type="file" />
      </div>
      <div>
        <label htmlFor="Update Email">Update Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Add a personal description">Add Personal Description</label>
        <Field name="description" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Add your address">Address</label>
        <Field name="address" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Add your phone number">Phone</label>
        <Field name="phone" component="input" type="tel" />
      </div>
      <div>
        <label htmlFor="Add your date of birth">Date of Birth</label>
        <Field name="dob" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

UpdateProfile.propTypes = {
  handleSubmit: React.PropTypes.function,
};

const UpdateProfileMaker = reduxForm({
  form: 'profile',
  onSubmit: createProfileInformation,
})(UpdateProfile);

export default UpdateProfileMaker;
