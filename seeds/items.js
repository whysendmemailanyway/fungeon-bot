const twoHandedWeapons = [
  {full_name: 'Spiked chain', gp_value: 25, damage_dice_num: 2, damage_dice_faces: 4},
  {full_name: 'Falchion', gp_value: 75, damage_dice_faces: 6}
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Assorted items
      return knex('items').insert([
        {full_name: 'Flask of acid', gp_value: 10, is_explosive: true, is_flammable: true, is_container: true, ml_volume: 500},
        {full_name: 'Vial of antitoxin', gp_value: 50, is_container: true, is_flammable: true, is_explosive: true, ml_volume: 30},
        {full_name: "Artisan's tools", gp_value: 5, is_flammable: true},
        {full_name: 'Backpack', gp_value: 2, is_container: true, ml_volume: 30000},
      ])
        .then(() => {
          // Two-handed weapons
          return knex('items').insert(twoHandedWeapons.map(weapon => {
            weapon.is_two_handed = true;
            weapon.is_weapon = true;
            if (!weapon.damage_dice_num) weapon.damage_dice_num = 1;
            return weapon;
          }));
        });
      });
};
