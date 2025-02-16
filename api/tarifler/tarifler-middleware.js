const tarifModel=require("./tarifler-model")

const checkTarifId=async(req,res,next)=>{
    try {
        const isExist = await tarifModel.idyeGoreTarifGetir(req.params.id)
        if(isExist.length===0){
            res.status(404).json({message:"tarif bulunamadı"})
        }else{
            req.tarif=isExist
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports={checkTarifId}