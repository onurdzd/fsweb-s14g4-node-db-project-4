const icindekiler_adim = [
  { icindekiler_id: '1' , adim_id:1},
  { icindekiler_id: '2' , adim_id:2},
  { icindekiler_id: "3", adim_id:3},
  { icindekiler_id: '4' , adim_id:4},
  {icindekiler_id: '5' , adim_id:5},
  { icindekiler_id: '6' , adim_id:6},
  {icindekiler_id: "7 ", adim_id:7},
]

exports.icindekiler_adim = icindekiler_adim

exports.seed = function (knex) {
  return knex('icindekiler_adimlar').insert(icindekiler_adim)
}

