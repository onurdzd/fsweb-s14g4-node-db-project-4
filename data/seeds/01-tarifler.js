const tarif = [
  { tarif_adi: 'tarif1' , kayit_tarihi:"30.03.2023"},
  { tarif_adi: 'tarif2' , kayit_tarihi:"30.03.2023"},
  { tarif_adi: "tarif3", kayit_tarihi:"30.03.2023"},
  { tarif_adi: 'tarif4' , kayit_tarihi:"30.03.2023"},
  { tarif_adi: 'tarif5' , kayit_tarihi:"30.03.2023"},
  { tarif_adi: 'tarif6' , kayit_tarihi:"30.03.2023"},
  { tarif_adi: "tarif7 ", kayit_tarihi:"30.03.2023"},
]

exports.tarif = tarif

exports.seed = function (knex) {
  return knex('tarif').insert(tarif)
}