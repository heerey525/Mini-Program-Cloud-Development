const key = {
	AppID: 'wxda99ae45313257046',  
	AppKey: 'josgjwoijgowjgjsogjo', 
}

const getName = (msg) => {
  return msg+'李东bbsky';
};

//判断是否为数字
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
//元素在数组的index位置
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
exports.key = key
exports.getName = getName
exports.validateNumber = validateNumber
exports.indexOfAll = indexOfAll