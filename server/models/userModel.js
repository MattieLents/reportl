const db = require('../database/db');
const bcrypt = require('bcrypt');
require('./userTypeModel');
require('./classModel');
require('./fileModel');

const saltRounds = 10 || process.env.SALT_ROUNDS;

const User = db.Model.extend({
  tableName: 'users',
  hidden: ['password'],
  hasTimestamps: true,
  initialize() {
    this.on('creating', this.hashPassword);
  },
  virtuals: {
    fullName: {
      get() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
      },
      set(value) {
        const names = value.split(' ');
        this.set('firstName', names[0]);
        this.set('lastName', names[1]);
      },
    },
  },
  comparePassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.get('password'), (err, valid) => {
        if (err) {
          reject(err);
        }
        if (!valid) {
          reject('Not valid password');
        }
        resolve(this);
      });
    });
  },
  hashPassword() {
    if (this.get('password')) {
      return bcrypt.hash(this.get('password'), saltRounds)
        .then(hash => this.set('password', hash));
    }
    return Promise.resolve();
  },
  type() {
    return this.belongsTo('UserType', 'type_id');
  },
  classes() {
    return this.belongsToMany('Class', 'students_classes', 'student_id');
  },
  profilePhoto() {
    return this.belongsTo('File', 'profile_photo_id');
  },
});

module.exports = db.model('User', User);
