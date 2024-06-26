import mongoose from 'mongoose';

const oderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, require: true },
        qty: { type: Number, require: true },
        name: { type: Number, require: true },
        price: { type: String, require: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          require: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, require: true },
      city: { type: String, require: true },
      postlCode: { type: String, require: true },
      country: { type: String, require: true },
    },
    paymentMethod: {
      type: String,
      require: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    itemsPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    taxPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      require: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      require: true,
      default: false,
    },
    paidAt: { type: Date },
    isDelivered: {
      type: Boolean,
      require: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('order', oderSchema);
export default Order;
