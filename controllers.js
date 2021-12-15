const validateAlphaNumbericInput = (param)=>{
    param = param.trim();
    param = encodeURIComponent(param)
    if (!param.match(/^[0-9a-z]+$/))
        return false;
    return param;
}



module.exports = {validateAlphaNumbericInput};