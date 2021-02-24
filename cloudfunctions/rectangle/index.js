const cloud = require('wx-server-sdk')
cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV 
})
exports.main = async (event, context) => {
  const {width,height} = event
  console.log("长方形的周长与面积",[(width+height)*2,width*height])
  const wxContext = cloud.getWXContext()
  console.log("wxContext对象",wxContext)
  return {
    circum:(width+height)*2,
    area:width*height
  }
}