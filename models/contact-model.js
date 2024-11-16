const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-config');

const Contact = sequelize.define('Contact', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name',
    validate: {
      notNull: { msg: 'First name is required' },
      notEmpty : { msg: "First name can't be empty" },
    }
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email',
    validate: {
      notNull: { msg: 'Email is required' },
      notEmpty: { msg: "Email can't be empty" },
      isEmail: { msg: "Email must be a valid email address" },
    }
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: "Phone number must be unique",
    },
    field: 'phone_number',
    validate: {
      notNull: { msg: "Phone number is required"  },
      notEmpty: { msg: "Phone number can't be empty" },
      isNumeric: { msg: 'Phone number must contain only numbers' },
    }
  },
  company: {
    type: DataTypes.STRING,
    field: 'company',
  },
  jobTitle: {
    type: DataTypes.STRING,
    field: 'job_title',
  }
},{
  timestamps:false,
});

Contact.sync()
  .then(() => console.log('Contact table created successfully'))
  .catch(err => console.log('Error creating table: ', err));

module.exports = Contact;