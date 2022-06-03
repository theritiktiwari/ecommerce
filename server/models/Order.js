import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: "" },
    transactionId: { type: String, default: "" },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, default: "Initiated", required: true },
    orderStatus: { type: String, default: "Ordered", required: true },
    trackURL: { type: String, default: "/orders" },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);