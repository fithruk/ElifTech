const { Schema, model } = require("mongoose");

const participantsShema = new Schema({
  fullName: {
    type: String,
    requaired: true,
  },
  email: {
    type: String,
    requaired: true,
  },
  dateOfBirth: {
    type: String,
    requaired: true,
  },
  whereDidFound: {
    type: String,
    requaired: true,
  },
  eventIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});

module.exports = model("participant", participantsShema);
