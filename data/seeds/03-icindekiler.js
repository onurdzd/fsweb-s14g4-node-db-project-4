const icindekiler = [
  { icindekiler_adi: 'icindekiler1' , icindekiler_miktar:"miktar1"},
  { icindekiler_adi: 'icindekiler2' , icindekiler_miktar:"miktar2"},
  { icindekiler_adi: "icindekiler3", icindekiler_miktar:"miktar3"},
  { icindekiler_adi: 'icindekiler4' , icindekiler_miktar:"miktar4"},
  {icindekiler_adi: 'icindekiler5' , icindekiler_miktar:"miktar5"},
  { icindekiler_adi: 'icindekiler6' , icindekiler_miktar:"miktar6"},
  {icindekiler_adi: "icindekiler7 ", icindekiler_miktar:"miktar7"},
]

exports.icindekiler = icindekiler

exports.seed = function (knex) {
  return knex('icindekiler').insert(icindekiler)
}
