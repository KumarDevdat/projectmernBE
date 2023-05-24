const mongoose = require("mongoose");

const activitySchema = mongoose.Schema(
  {
    activitytype: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;