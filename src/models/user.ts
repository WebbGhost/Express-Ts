import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      maxlength: [50, 'Email cannot be more than 50 characters'],
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        'Please provide a valid email',
      ],
    },
    password: {
      type: String,

      required: [true, 'Please add a password'],
      minlength: [6, 'Password cannot be less than 6 characters'],
      maxlength: [150, 'Password cannot be more than 20 characters'],
    },
  },
  {
    timestamps: true,
  },
);

const User =  mongoose.model('User', UserSchema);
export default User

export const getUserByEmail = (email:string)=>{
  return User.findOne({
    email
  })
}