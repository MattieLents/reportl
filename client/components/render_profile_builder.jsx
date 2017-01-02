import React from 'react';
import UploadFile from '../containers/upload_file';
import UpdateProfile from '../containers/update_profile';

const RenderProfileBuilder = () => (
  <div>
    <h3>Upload Photo</h3>
    <UploadFile />
    <h3>Add Information</h3>
    <UpdateProfile />
  </div>
);

export default RenderProfileBuilder;
