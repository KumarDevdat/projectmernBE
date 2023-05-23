const httpStatus = require("http-status");
const { activityService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getActivity = catchAsync(async (req, res,next) => {
  try {
  const result = await activityService.getActivity();
  res.send({ result, msg: "Get Successful!", status: 200 });
  } catch (error) {
    next(error);
  }
});
const saveActivity = catchAsync(async (req, res,next) => {
  try {
  const saveActivity = {
    activitytype: req.body.activitytype,
    description: req.body.description,
    date: req.body.date,
    duration: req.body.duration,
  };
  const result = await activityService.createActivity(saveActivity);
  res
    .status(httpStatus.CREATED)
    .send({
      result,
      msg: "Activity Created Successful!",
      status: 200,
      success: "Success",
    });
    } catch (error) {
      next(error);
    }
});

module.exports = {
  getActivity,
  saveActivity,
};
