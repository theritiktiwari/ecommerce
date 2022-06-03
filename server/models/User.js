import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: Number, default: "" },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    pincode: { type: Number, default: "" },
    isAdmin: { type: String, default: "user" }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);