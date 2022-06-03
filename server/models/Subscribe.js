import mongoose from 'mongoose';
const { Schema } = mongoose;

const SubscribeSchema = new Schema({
    email: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Subscribe || mongoose.model('Subscribe', SubscribeSchema);