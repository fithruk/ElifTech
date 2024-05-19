const { Schema, model } = require("mongoose");

const eventShema = new Schema({
  title: {
    type: String,
    requaired: true,
  },
  description: {
    type: String,
    requaired: true,
  },
  date: {
    type: Date,
    requaired: true,
  },
  organizer: {
    type: String,
    requaired: true,
  },
  participantsIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "participant",
    },
  ],
});

module.exports = model("event", eventShema);
