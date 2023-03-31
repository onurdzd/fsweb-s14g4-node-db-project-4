const tarif = [
  { tarif_adi: 'tarif1' },
  { tarif_adi: 'tarif2' },
  { tarif_adi: "tarif3"},
  { tarif_adi: 'tarif4' },
  { tarif_adi: 'tarif5' },
  { tarif_adi: 'tarif6' },
  { tarif_adi: "tarif7 "},
]

exports.tarif = tarif

exports.seed = function (knex) {
  return knex('tarif').insert(tarif)
}