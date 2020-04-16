// Rather than store a flat description for each item, I would like the narrator
//   to be able to build descriptions dynamically based on the item's materials,
//   purpose, condition, etc...

const twoHandedWeapons = [
  // is a spiked chain flexible?
  {full_name: 'Spiked chain', gp_value: 25, damage_dice_num: 2, damage_dice_faces: 4},
  {full_name: 'Falchion', gp_value: 75, damage_dice_faces: 6},
  {full_name: 'Heavy flail', gp_value: 15, damage_dice_faces: 8},
  {full_name: 'Glaive', gp_value: 8, damage_dice_faces: 8},
  {full_name: 'Greataxe', gp_value: 20, damage_dice_faces: 10},
  {full_name: 'Greatclub', gp_value: 5, damage_dice_faces: 8, is_flammable: true},
  {full_name: 'Greatsword', gp_value: 50, damage_dice_num: 2, damage_dice_faces: 6},
  {full_name: 'Guisarme', gp_value: 9, damage_dice_num: 2, damage_dice_faces: 4},
  {full_name: 'Halberd', gp_value: 10, damage_dice_faces: 10},
  {full_name: 'Lance', gp_value: 10, damage_dice_faces: 8, is_flammable: true},
  {full_name: 'Longspear', gp_value: 5, damage_dice_faces: 8, is_flammable: true},
  {full_name: 'Quarterstaff', gp_value: 0, damage_dice_faces: 6, is_flammable: true},
  {full_name: 'Scythe', gp_value: 18, damage_dice_num: 2, damage_dice_faces: 4},
  {full_name: 'Spear', gp_value: 2, damage_dice_faces: 8, is_ranged: true, meters_range: 6, is_flammable: true}
];

const lightWeapons = [
  {full_name: 'Throwing axe', gp_value: 8, damage_dice_faces: 6, is_ranged: true, meters_range: 3},
  {full_name: 'Dagger', gp_value: 2, damage_dice_faces: 4, is_ranged: true, meters_range: 3},
  {full_name: 'Light hammer', gp_value: 1, damage_dice_faces: 6, is_ranged: true, meters_range: 6},
  {full_name: 'Handaxe', gp_value: 6, damage_dice_faces: 4},
  {full_name: 'Light mace', gp_value: 5, damage_dice_faces: 6},
  {full_name: 'Light pick', gp_value: 4, damage_dice_faces: 4},
  {full_name: 'Sap', gp_value: 1, damage_dice_faces: 6},
  {full_name: 'Sickle', gp_value: 6, damage_dice_faces: 6},
  {full_name: 'Short sword', gp_value: 10, damage_dice_faces: 6}
];

const oneHandedWeapons = [
  {full_name: 'Battleaxe', gp_value: 10, damage_dice_faces: 8},
  {full_name: 'Club', gp_value: 0, damage_dice_faces: 6, is_ranged: true, meters_range: 3, is_flammable: true},
  {full_name: 'Flail', gp_value: 8, damage_dice_faces: 8},
  {full_name: 'Longsword', gp_value: 15, damage_dice_faces: 8},
  {full_name: 'Heavy mace', gp_value: 12, damage_dice_faces: 8},
  {full_name: 'Morningstar', gp_value: 8, damage_dice_faces: 8},
  {full_name: 'Heavy pick', gp_value: 8, damage_dice_faces: 6},
  {full_name: 'Rapier', gp_value: 20, damage_dice_faces: 6},
  {full_name: 'Scimitar', gp_value: 15, damage_dice_faces: 6},
  {full_name: 'Shortspear', gp_value: 1, damage_dice_faces: 6, is_ranged: true, meters_range: 6, is_flammable: true},
  {full_name: 'Bastard sword', gp_value: 35, damage_dice_faces: 10},
  {full_name: 'Trident', gp_value: 15, damage_dice_faces: 8, is_ranged: true, meters_range: 3},
  {full_name: 'Dwarven waraxe', gp_value: 30, damage_dice_faces: 10},
  {full_name: 'Warhammer', gp_value: 12, damage_dice_faces: 8},
  {full_name: 'Whip', gp_value: 1, damage_dice_faces: 3}
];

const rangedWeapons = [
  {full_name: 'Hand crossbow', gp_value: 100, damage_dice_faces: 4, meters_range: 9},
  {full_name: 'Heavy crossbow', gp_value: 50, damage_dice_faces: 10, meters_range: 37, is_two_handed: true},
  {full_name: 'Light crossbow', gp_value: 35, damage_dice_faces: 8, meters_range: 80, is_two_handed: true},
  {full_name: 'Dart', gp_value: 0.5, damage_dice_faces: 3, meters_range: 6},
  {full_name: 'Javelin', gp_value: 1, damage_dice_faces: 6, meters_range: 9},
  {full_name: 'Longbow', gp_value: 75, damage_dice_faces: 8, meters_range: 30, is_two_handed: true},
  {full_name: 'Net', gp_value: 20, damage_dice_num: null, meters_range: 3, is_two_handed: true},
  {full_name: 'Shortbow', gp_value: 30, damage_dice_faces: 6, meters_range: 18, is_two_handed: true},
  {full_name: 'Sling', gp_value: 0, damage_dice_faces: 4, meters_range: 15}
];

const shields = [
  {full_name: 'Buckler', gp_value: 15, armor_bonus: 1},
  {full_name: 'Light wooden shield', gp_value: 3, armor_bonus: 1, is_flammable: true},
  {full_name: 'Light steel shield', gp_value: 9, armor_bonus: 1},
  {full_name: 'Heavy wooden shield', gp_value: 7, armor_bonus: 2, is_flammable: true},
  {full_name: 'Heavy steel shield', gp_value: 20, armor_bonus: 2},
  {full_name: 'Tower shield', gp_value: 30, armor_bonus: 4}
];

const lightArmors = [
  {full_name: 'Padded armor', gp_value: 2, armor_bonus: 1, is_flammable: true},
  {full_name: 'Leather armor', gp_value: 10, armor_bonus: 2},
  {full_name: 'Studded leather armor', gp_value: 25, armor_bonus: 3},
  {full_name: 'Chain shirt', gp_value: 100, armor_bonus: 4}
];

const mediumArmors = [
  {full_name: 'Hide armor', gp_value: 15, armor_bonus: 3, is_flammable: true},
  {full_name: 'Scale mail', gp_value: 50, armor_bonus: 4},
  {full_name: 'Chainmail', gp_value: 150, armor_bonus: 5},
  {full_name: 'Breastplate', gp_value: 200, armor_bonus: 5}
];

const heavyArmors = [
  {full_name: 'Splint mail', gp_value: 200, armor_bonus: 6},
  {full_name: 'Banded mail', gp_value: 250, armor_bonus: 6},
  {full_name: 'Half-plate armor', gp_value: 600, armor_bonus: 7},
  {full_name: 'Full plate armor', gp_value: 1500, armor_bonus: 8}
];

const clothes = [
  {full_name: "Artisan's outfit", gp_value: 1},
  {full_name: "Cleric's vestments", gp_value: 5},
  {full_name: 'Cold weather outfit', gp_value: 8},
  {full_name: "Courtier's outfit", gp_value: 30},
  {full_name: "Entertainer's outfit", gp_value: 3},
  {full_name: "Explorer's outfit", gp_value: 10},
  {full_name: "Monk's outfit", gp_value: 5},
  {full_name: "Noble's outfit", gp_value: 75},
  {full_name: "Peasant's outfit", gp_value: 0.1},
  {full_name: 'Royal outfit', gp_value: 200},
  {full_name: "Scholar's outfit", gp_value: 5},
  {full_name: "Traveller's outfit", gp_value: 1},
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
      ]);
    })
    .then(function () {
      // Clothing
      return knex('items').insert(clothes.map(outfit => {
        outfit.is_clothing = true;
        outfit.is_flammable = true;
        outfit.is_flexible = true;
        return outfit;
      }));
    })
    .then(() => {
      // Two-handed weapons
      return knex('items').insert(twoHandedWeapons.map(weapon => {
        weapon.is_two_handed = true;
        weapon.is_weapon = true;
        weapon.is_melee = true;
        if (!weapon.damage_dice_num) weapon.damage_dice_num = 1;
        return weapon;
      }));
    })
    .then(() => {
      // Light weapons
      return knex('items').insert(lightWeapons.map(weapon => {
        weapon.is_weapon = true;
        weapon.is_melee = true;
        weapon.is_light = true;
        if (!weapon.damage_dice_num) weapon.damage_dice_num = 1;
        return weapon;
      }));
    })
    .then(() => {
      // One-handed weapons
      return knex('items').insert(oneHandedWeapons.map(weapon => {
        weapon.is_weapon = true;
        weapon.is_melee = true;
        if (!weapon.damage_dice_num) weapon.damage_dice_num = 1;
        return weapon;
      }));
    })
    .then(() => {
      // Ranged weapons
      return knex('items').insert(rangedWeapons.map(weapon => {
        weapon.is_weapon = true;
        weapon.is_ranged = true;
        if (!weapon.damage_dice_num) weapon.damage_dice_num = 1;
        return weapon;
      }));
    })
    .then(() => {
      // Shields
      return knex('items').insert(shields.map(shield => {
        shield.is_shield = true;
        return shield;
      }));
    })
    .then(() => {
      // Light armor
      return knex('items').insert(lightArmors.map(armor => {
        armor.is_armor = true;
        armor.is_light = true;
        return armor;
      }));
    })
    .then(() => {
      // Medium armor
      return knex('items').insert(mediumArmors.map(armor => {
        armor.is_armor = true;
        armor.is_medium = true;
        return armor;
      }));
    })
    .then(() => {
      // Heavy armor
      return knex('items').insert(heavyArmors.map(armor => {
        armor.is_armor = true;
        armor.is_heavy = true;
        return armor;
      }));
    });
};
