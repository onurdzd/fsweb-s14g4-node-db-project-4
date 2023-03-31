const db=require("../../data/db-config")

const icindekileriGetir=async (adim_id)=>{
    const icindekiler=await db("icindekiler_adimlar as ia").leftJoin("icindekiler as i","ia.icindekiler_id","i.icindekiler_id").select("i.*").where("adim_id",adim_id)
    return icindekiler
}
const idyeGoreTarifGetir=async(tarif_id)=>{
    const tarifler=await db("tarif as t").select("*").leftJoin("adimlar as a","a.tarif_id","t.tarif_id").leftJoin("icindekiler_adimlar as ia","a.adim_id","ia.adim_id").leftJoin("icindekiler as i","i.icindekiler_id","ia.icindekiler_id").select("t.*","a.adim_id","a.adim_sira","a.adim_talimat","i.icindekiler_id","i.icindekiler_adi","i.icindekiler_miktar").where("t.tarif_id",tarif_id)
    if(tarifler.length === 0){
        return []
    }

    const tarifModel={
        tarif_id:tarif_id,
        tarif_adi:tarifler[0]["tarif_adi"],
        kayit_tarihi:tarifler[0]["kayit_tarihi"],
        adimlar:[]
    }

    for (let i = 0; i < tarifler.length; i++) {
        const tarif = tarifler[i];
        const adimModel={
            adim_id:tarif.adim_id,
            adim_sira:tarif.adim_sira,
            adim_talimatlari:tarif.adim_talimat,
            icindekiler:[]
        }
        const icindekiler=await icindekileriGetir(tarif.adim_id)
        adimModel.icindekiler=icindekiler
        tarifModel.adimlar.push(adimModel)
    }
    return tarifModel
}

module.exports={icindekileriGetir,idyeGoreTarifGetir};