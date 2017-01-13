import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeNewClass } from '../../actions/index';

const AssetForm = ({ handleSubmit }) => (
  <div className="form">
    <h2>Asset Form</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Class Id">Input ClassId</label>
        <Field name="id" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="asset">Asset</label>
        <Field name="Asset Name" component="input" type="file" />
      </div>
      <div>
        <label htmlFor="tags">Tags</label>
        <Field name="Tags" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);

AssetForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const AssetMakerForm = reduxForm({
  form: 'addClassAsset',
  onSubmit: makeNewClass,
})(AssetForm);

export default AssetMakerForm;
