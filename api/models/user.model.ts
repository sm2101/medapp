import mongoose, { ObjectId } from "mongoose";

const { Schema, model, Document, models } = mongoose;

export const UserTypeMap = {
  admin: "admin",
  doctor: "doctor",
  patient: "patient",
} as const;

export const UserTypeValues = Object.values(UserTypeMap);

export type UserType = typeof UserTypeMap[keyof typeof UserTypeMap];

export interface IUser extends Document {
  name: string;
  email: string;
  uid: string;
  type: UserType;
  profile: string;
  isBlocked: boolean;
  phone: string;
  walletId: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: UserTypeValues,
      required: true,
    },
    profile: {
      type: Schema.Types.ObjectId,
      refPath: type,
      required: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      unique: true,
    },
    walletId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = models.User || model("User", UserSchema);
