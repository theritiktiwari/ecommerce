import mongoose from 'mongoose';
const { Schema } = mongoose;

const ForgetSchema = new Schema({
    userId: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Forget || mongoose.model('Forget', ForgetSchema);