import axios from 'axios';

export function loginSubmit(login) {
  const request = axios.post('/login', login);
  return {
    type: 'LOGIN_SUBMITTED',
    payload: request,
  };
}

export function createUser(user) {
  const request = axios.post('/api/users', user);
  return {
    type: 'CREATE_USER',
    payload: request,
  };
}

export function makeNewClass(classes) {
  const request = axios.post('/createclass', classes);
  return {
    type: 'CLASS_CREATED',
    payload: request,
  };
}

export function getAllClasses() {
  const request = axios.get('/api/classes/1');
  return {
    type: 'GET_CLASSES',
    payload: request,
  };
}

export function deleteUser(id) {
  const endpoint = `/api/users/${id}`;
  const request = axios.delete(endpoint);

  return {
    type: 'DELETE_USER',
    payload: request,
  };
}

export function getAllUsers() {
  const request = axios.get('/api/users');

  return {
    type: 'GET_USERS',
    payload: request,
  };
}

export function getAllTeachers() {
  const request = axios.get('/api/usertypes/teacher');

  return {
    type: 'GET_TEACHERS',
    payload: request,
  };
}

export function getAllStudents() {
  const request = axios.get('/api/usertypes/student');

  return {
    type: 'GET_STUDENTS',
    payload: request,
  };
}

export function createProfileInformation(profile) {
  const request = axios.put(`/api/users/${profile.id}`, profile);
  return {
    type: 'UPDATE_PROFILE',
    payload: request,
  };
}

export function getProfileInformation() {
  const request = axios.get('/api/users/8');
  return {
    type: 'GET_PROFILE',
    payload: request,
  };
}

export function selectForm(form) {
  return {
    type: 'SELECT_FORM',
    payload: form,
  };
}

export function addClassId(id) {
  return {
    type: 'ADD_CLASS_ID',
    payload: id,
  };
}

export function updateClass(form) {
  const request = axios.put(`/api/classes/${form.id}`, form);
  return {
    type: 'UPDATE_CLASS_INFO',
    payload: request,
  };
}

export function uploadFile(files) {
  const data = new FormData();
  Object.keys(files.uploadedFile).forEach(key => data.append(key, files.uploadedFile[key]));
  const request = axios.post('/api/files', data);
  return {
    type: 'UPLOAD_FILE',
    payload: request,
  };
}
