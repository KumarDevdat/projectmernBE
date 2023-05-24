const {Activity}= require('../models');
const getActivity = async () => {
    const getActivity=await Activity.find()
    return getActivity;
}

const createActivity= async (activityBody) => {
    return Activity.create(activityBody);
    // console.log(activityBody)
}
module.exports = {
    getActivity,
    createActivity,
}
