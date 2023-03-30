const db=require("../../data/db-config")

const find=()=>{
    return db("tarif as t").select("*").leftJoin("adimlar as a","a.tarif_id","t.tarif_id").leftJoin("icindekiler as i","a.adim_id","i.adim_id").groupBy("t.tarif_id")
    .orderBy("t.tarif_id", "asc")
}

module.exports={find};