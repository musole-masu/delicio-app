import mongoose from 'mongoose';
import { PasswordUtil } from '../utils/password/passwordUtil';
const DRC_STATE = ['KINSHASA', 'NORD KIVU', 'SUD KIVU'];

interface UserAttrs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role?: string;
  address?: { street: string; city: string; state: string };
  profilePic?: string;
  isVerified?: boolean;
}

interface UserDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role?: string;
  address?: { street: string; city: string; state: string };
  profilePic?: string;
  isVerified?: boolean;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attr: UserAttrs): UserDoc;
}
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['CHEF', 'CLIENT', 'ADMIN'],
      default: 'CLIENT',
    },
    address: {
      street: String,
      city: String,
      state: {
        type: String,
        uppercase: true,
        enum: DRC_STATE,
      },
    },
    profilePic: {
      data: Buffer,
      contentType: String,
    },
    isChefVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await PasswordUtil.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
