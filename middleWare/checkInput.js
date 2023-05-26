const checkInput =(req,res,next)=>{
  let {nametodo} =req.body
  if(nametodo===''||nametodo===null|| nametodo===undefined){
    return res.status(400).json("phải điển thông tin")
  }
  else{
    next()
  }
}

module.exports = checkInput