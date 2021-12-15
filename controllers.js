const validateAlphaNumbericInput = (param)=>{
    param = param.trim();
    param = encodeURIComponent(param)
    if (!param.match(/^[0-9a-z]+$/))
        return false;
    return param;
}

const getMeetingDetails = (item)=>{
    return{
        uid1:item.userId1,
        username1:item.username1,
        uid2:item.userId2,
        username2:item.username2,
        meetingId:item.meetingId,
        date:item.date
    }
}

module.exports = {validateAlphaNumbericInput,getMeetingDetails};