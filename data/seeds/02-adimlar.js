const adimlar = [
  {tarif_id:1, adim_sira: 'adim1' , adim_talimat:"talimat1"},
  {tarif_id:2, adim_sira: 'adim2' , adim_talimat:"talimat2"},
  {tarif_id:4, adim_sira: "adim3", adim_talimat:"talimat3"},
  {tarif_id:1, adim_sira: 'adim4' , adim_talimat:"talimat4"},
  {tarif_id:1, adim_sira: 'adim5' , adim_talimat:"talimat5"},
  {tarif_id:2, adim_sira: 'adim6' , adim_talimat:"talimat6"},
  {tarif_id:3, adim_sira: "adim7 ", adim_talimat:"talimat7"},
]

exports.adimlar = adimlar

exports.seed = function (knex) {
  return knex('adimlar').insert(adimlar)
}