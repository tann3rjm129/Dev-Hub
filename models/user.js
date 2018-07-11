const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  projectName: { type: String, default: '' },
  githubLink: { type: String, default: '' },
  synopsis: { type: String, default: '' },
  image1: { type: String, default: '' },
  image2: { type: String, default: '' },
  image3: { type: String, default: '' },
  donationGoal: { type: [Number], default: '' },
  reasonForDonation: { type: String, default: '' },
  donationUsedFor: { type: String, default: '' },
  donationCurrent: { type: [Number], default: '' },
  date: { type: Date, default: Date.now() }
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
