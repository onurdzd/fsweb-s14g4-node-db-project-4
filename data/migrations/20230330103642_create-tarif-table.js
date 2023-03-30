/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("tarif", (tbl) => {
      tbl.increments("tarif_id");
      tbl.string("tarif_adi", 128).notNullable();
      tbl.date("kayit_tarihi").notNullable();
    })
    .createTable("adimlar", (tbl) => {
      tbl.increments("adim_id");
      tbl.integer("tarif_id").unsigned().references("tarif_id").inTable("tarif").onUpdate("CASCADE").onDelete("CASCADE").notNullable()
      tbl.integer("adim_sira").unsigned().notNullable();
      tbl.string("adim_talimat").notNullable();
    })
    .createTable("icindekiler", (tbl) => {
      tbl.increments("icindekiler_id");
      tbl.integer("tarif_id").unsigned().references("tarif_id").inTable("tarif").onUpdate("CASCADE").onDelete("CASCADE").notNullable()
      tbl.string("icindekiler_adi").notNullable();
      tbl.integer("icindekiler_miktar").unsigned().notNullable();
      tbl.primary
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("icindekiler")
    .dropTableIfExists("adimlar")
    .dropTableIfExists("tarif")
};
