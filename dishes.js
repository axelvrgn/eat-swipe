/*
 * Liste des plats de « On mange quoi ce soir ? »
 * ------------------------------------------------
 * Une ligne par plat : { emoji, nom, tags }
 *
 * Tags disponibles (ce sont les filtres de l'écran d'accueil) :
 *   rapide    → prêt en 30 minutes environ
 *   vege      → sans viande ni poisson
 *   leger     → plutôt léger
 *   reconfort → plat réconfortant
 *   commande  → se commande facilement en livraison
 *   france    → cuisine française
 *   monde     → cuisine du monde
 *
 * Pour ajouter un plat, copie une ligne, change-la, et n'oublie pas la virgule à la fin.
 */
window.PLATS = [
  // ---------- Cuisine française ----------
  { emoji: '🍲', nom: 'Pot-au-feu',                    tags: ['reconfort', 'france'] },
  { emoji: '🍷', nom: 'Bœuf bourguignon',              tags: ['reconfort', 'france'] },
  { emoji: '🍲', nom: 'Blanquette de veau',            tags: ['reconfort', 'france'] },
  { emoji: '🐓', nom: 'Coq au vin',                    tags: ['reconfort', 'france'] },
  { emoji: '🫘', nom: 'Cassoulet',                     tags: ['reconfort', 'france'] },
  { emoji: '🥬', nom: 'Choucroute garnie',             tags: ['reconfort', 'france'] },
  { emoji: '🥔', nom: 'Tartiflette',                   tags: ['reconfort', 'france'] },
  { emoji: '🧀', nom: 'Raclette',                      tags: ['reconfort', 'france'] },
  { emoji: '🫕', nom: 'Fondue savoyarde',              tags: ['vege', 'reconfort', 'france'] },
  { emoji: '🥘', nom: 'Aligot saucisse',               tags: ['reconfort', 'france'] },
  { emoji: '🍲', nom: 'Potée auvergnate',              tags: ['reconfort', 'france'] },
  { emoji: '🐖', nom: 'Petit salé aux lentilles',      tags: ['reconfort', 'france'] },
  { emoji: '🥔', nom: 'Hachis parmentier',             tags: ['reconfort', 'france'] },
  { emoji: '🥔', nom: 'Gratin dauphinois',             tags: ['vege', 'reconfort', 'france'] },
  { emoji: '🥓', nom: 'Endives au jambon',             tags: ['reconfort', 'france'] },
  { emoji: '🍅', nom: 'Tomates farcies',               tags: ['reconfort', 'france'] },
  { emoji: '🥧', nom: 'Quiche lorraine',               tags: ['reconfort', 'france'] },
  { emoji: '🥧', nom: 'Tarte tomate-moutarde',         tags: ['vege', 'france'] },
  { emoji: '🥓', nom: 'Tarte flambée',                 tags: ['reconfort', 'france'] },
  { emoji: '🥧', nom: 'Bouchées à la reine',           tags: ['reconfort', 'france'] },
  { emoji: '🧅', nom: "Soupe à l'oignon gratinée",     tags: ['vege', 'reconfort', 'france'] },
  { emoji: '🥣', nom: 'Soupe de légumes',              tags: ['vege', 'leger', 'france'] },
  { emoji: '🍆', nom: 'Ratatouille',                   tags: ['vege', 'leger', 'france'] },
  { emoji: '🥪', nom: 'Croque-monsieur',               tags: ['rapide', 'reconfort', 'france'] },
  { emoji: '🍳', nom: 'Croque-madame',                 tags: ['rapide', 'reconfort', 'france'] },
  { emoji: '🧀', nom: 'Tartines gratinées',            tags: ['rapide', 'reconfort', 'france'] },
  { emoji: '🍺', nom: 'Welsh',                         tags: ['reconfort', 'france'] },
  { emoji: '🍗', nom: 'Poulet rôti & frites',          tags: ['reconfort', 'france'] },
  { emoji: '🥩', nom: 'Steak frites',                  tags: ['rapide', 'reconfort', 'france'] },
  { emoji: '🍖', nom: 'Rôti de porc & haricots verts', tags: ['reconfort', 'france'] },
  { emoji: '🦆', nom: 'Magret de canard',              tags: ['france'] },
  { emoji: '🌭', nom: 'Saucisse-purée',                tags: ['rapide', 'reconfort', 'france'] },
  { emoji: '🍝', nom: 'Coquillettes jambon-fromage',   tags: ['rapide', 'reconfort', 'france'] },
  { emoji: '🦪', nom: 'Moules-frites',                 tags: ['reconfort', 'france'] },
  { emoji: '🐟', nom: 'Bouillabaisse',                 tags: ['reconfort', 'france'] },
  { emoji: '🐟', nom: 'Brandade de morue',             tags: ['reconfort', 'france'] },
  { emoji: '🐚', nom: 'Coquilles Saint-Jacques',       tags: ['leger', 'france'] },
  { emoji: '🐟', nom: 'Poisson en papillote',          tags: ['rapide', 'leger', 'france'] },
  { emoji: '🥗', nom: 'Salade niçoise',                tags: ['rapide', 'leger', 'france'] },
  { emoji: '🐐', nom: 'Salade de chèvre chaud',        tags: ['rapide', 'vege', 'france'] },
  { emoji: '🥚', nom: 'Œufs mayo & crudités',          tags: ['rapide', 'vege', 'leger', 'france'] },
  { emoji: '🍄', nom: 'Omelette aux champignons',      tags: ['rapide', 'vege', 'leger', 'france'] },
  { emoji: '🥞', nom: 'Galettes complètes',            tags: ['rapide', 'france'] },
  { emoji: '🥞', nom: 'Soirée crêpes',                 tags: ['rapide', 'vege', 'reconfort', 'france'] },
  { emoji: '🧀', nom: 'Plateau apéro dînatoire',       tags: ['rapide', 'france'] },

  // ---------- Italie ----------
  { emoji: '🥓', nom: 'Pâtes carbonara',               tags: ['rapide', 'reconfort', 'monde'] },
  { emoji: '🍅', nom: 'Pâtes bolognaise',              tags: ['rapide', 'reconfort', 'monde'] },
  { emoji: '🌿', nom: 'Pâtes au pesto',                tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🧀', nom: 'Pâtes cacio e pepe',            tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🦐', nom: 'Pâtes aux fruits de mer',       tags: ['monde'] },
  { emoji: '🍝', nom: 'Lasagnes',                      tags: ['reconfort', 'monde'] },
  { emoji: '🍝', nom: 'Cannellonis ricotta-épinards',  tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🥔', nom: 'Gnocchis sauce tomate',         tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🍄', nom: 'Risotto aux champignons',       tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🍕', nom: 'Pizza',                         tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🍕', nom: 'Pizza maison',                  tags: ['reconfort', 'monde'] },
  { emoji: '🍆', nom: 'Aubergines à la parmesane',     tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🥩', nom: 'Osso buco',                     tags: ['reconfort', 'monde'] },
  { emoji: '🥣', nom: 'Minestrone',                    tags: ['vege', 'leger', 'monde'] },
  { emoji: '🥖', nom: 'Bruschettas',                   tags: ['rapide', 'vege', 'leger', 'monde'] },
  { emoji: '🫓', nom: 'Piadinas',                      tags: ['rapide', 'monde'] },

  // ---------- Espagne & Portugal ----------
  { emoji: '🥘', nom: 'Paella',                        tags: ['reconfort', 'monde'] },
  { emoji: '🥔', nom: 'Tortilla espagnole',            tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🍢', nom: 'Soirée tapas',                  tags: ['monde'] },
  { emoji: '🍅', nom: 'Gaspacho',                      tags: ['rapide', 'vege', 'leger', 'monde'] },
  { emoji: '🦐', nom: "Crevettes à l'ail",             tags: ['rapide', 'leger', 'monde'] },
  { emoji: '🐟', nom: 'Bacalhau à brás',               tags: ['monde'] },

  // ---------- Grèce, Moyen-Orient & Maghreb ----------
  { emoji: '🍆', nom: 'Moussaka',                      tags: ['reconfort', 'monde'] },
  { emoji: '🥗', nom: 'Salade grecque',                tags: ['rapide', 'vege', 'leger', 'monde'] },
  { emoji: '🥙', nom: 'Pitas gyros',                   tags: ['rapide', 'commande', 'monde'] },
  { emoji: '🥙', nom: 'Kebab',                         tags: ['commande', 'monde'] },
  { emoji: '🧆', nom: 'Falafels & houmous',            tags: ['vege', 'leger', 'monde'] },
  { emoji: '🥒', nom: 'Taboulé libanais',              tags: ['rapide', 'vege', 'leger', 'monde'] },
  { emoji: '🍢', nom: 'Brochettes grillées',           tags: ['monde'] },
  { emoji: '🥘', nom: 'Couscous',                      tags: ['reconfort', 'monde'] },
  { emoji: '🫔', nom: 'Tajine',                        tags: ['reconfort', 'monde'] },
  { emoji: '🍳', nom: 'Chakchouka',                    tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🥟', nom: 'Bricks au thon',                tags: ['rapide', 'monde'] },
  { emoji: '🥣', nom: 'Soupe de lentilles corail',     tags: ['vege', 'leger', 'monde'] },

  // ---------- Afrique & Antilles ----------
  { emoji: '🥜', nom: 'Mafé',                          tags: ['reconfort', 'monde'] },
  { emoji: '🍋', nom: 'Poulet yassa',                  tags: ['reconfort', 'monde'] },
  { emoji: '🍌', nom: 'Alloco & poisson braisé',       tags: ['monde'] },
  { emoji: '🍛', nom: 'Colombo de poulet',             tags: ['reconfort', 'monde'] },
  { emoji: '🐟', nom: 'Accras de morue',               tags: ['monde'] },

  // ---------- Japon & Corée ----------
  { emoji: '🍣', nom: 'Sushis',                        tags: ['leger', 'commande', 'monde'] },
  { emoji: '🍜', nom: 'Ramen',                         tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🍛', nom: 'Curry japonais',                tags: ['reconfort', 'monde'] },
  { emoji: '🍱', nom: 'Bento japonais',                tags: ['leger', 'commande', 'monde'] },
  { emoji: '🥟', nom: 'Gyozas',                        tags: ['commande', 'monde'] },
  { emoji: '🍚', nom: 'Donburi au poulet',             tags: ['rapide', 'monde'] },
  { emoji: '🍤', nom: 'Tempuras',                      tags: ['monde'] },
  { emoji: '🍢', nom: 'Yakitoris',                     tags: ['monde'] },
  { emoji: '🥘', nom: 'Bibimbap',                      tags: ['leger', 'monde'] },
  { emoji: '🍗', nom: 'Poulet frit coréen',            tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🍲', nom: 'Kimchi jjigae',                 tags: ['reconfort', 'monde'] },

  // ---------- Chine & Asie du Sud-Est ----------
  { emoji: '🍚', nom: 'Riz cantonais',                 tags: ['rapide', 'monde'] },
  { emoji: '🥟', nom: 'Raviolis chinois vapeur',       tags: ['commande', 'monde'] },
  { emoji: '🦆', nom: 'Canard laqué',                  tags: ['commande', 'monde'] },
  { emoji: '🥢', nom: 'Nouilles sautées au bœuf',      tags: ['rapide', 'monde'] },
  { emoji: '🍗', nom: 'Poulet général Tao',            tags: ['commande', 'monde'] },
  { emoji: '🥢', nom: 'Tofu sauté au sésame',          tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🥢', nom: 'Wok de légumes & nouilles',     tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🥜', nom: 'Pad thaï',                      tags: ['rapide', 'commande', 'monde'] },
  { emoji: '🍛', nom: 'Curry vert thaï',               tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🍜', nom: 'Phở',                           tags: ['leger', 'reconfort', 'commande', 'monde'] },
  { emoji: '🥢', nom: 'Bò bún',                        tags: ['leger', 'commande', 'monde'] },
  { emoji: '🥖', nom: 'Bánh mì',                       tags: ['rapide', 'commande', 'monde'] },
  { emoji: '🥬', nom: 'Rouleaux de printemps',         tags: ['leger', 'monde'] },
  { emoji: '🍜', nom: 'Laksa',                         tags: ['reconfort', 'monde'] },

  // ---------- Inde ----------
  { emoji: '🍛', nom: 'Butter chicken',                tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🍛', nom: 'Poulet tikka masala',           tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🍛', nom: 'Curry de pois chiches',         tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🫘', nom: 'Dal de lentilles',              tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🥬', nom: 'Palak paneer',                  tags: ['vege', 'monde'] },
  { emoji: '🍚', nom: 'Biryani',                       tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🥟', nom: 'Samoussas',                     tags: ['commande', 'monde'] },

  // ---------- Amériques ----------
  { emoji: '🌮', nom: 'Tacos mexicains',               tags: ['rapide', 'monde'] },
  { emoji: '🌯', nom: 'Burritos',                      tags: ['reconfort', 'commande', 'monde'] },
  { emoji: '🫔', nom: 'Enchiladas',                    tags: ['reconfort', 'monde'] },
  { emoji: '🧀', nom: 'Quesadillas',                   tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🥑', nom: 'Nachos & guacamole',            tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🌶️', nom: 'Chili con carne',               tags: ['reconfort', 'monde'] },
  { emoji: '🫘', nom: 'Chili sin carne',               tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🍔', nom: 'Burgers maison',                tags: ['reconfort', 'monde'] },
  { emoji: '🍔', nom: 'Burger végé',                   tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🌭', nom: 'Hot-dogs',                      tags: ['rapide', 'reconfort', 'monde'] },
  { emoji: '🍖', nom: 'Ribs sauce barbecue',           tags: ['reconfort', 'monde'] },
  { emoji: '🥪', nom: 'Club sandwich',                 tags: ['rapide', 'monde'] },
  { emoji: '🧀', nom: 'Mac & cheese',                  tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🥯', nom: 'Bagels saumon-fromage frais',   tags: ['rapide', 'leger', 'monde'] },
  { emoji: '🐟', nom: 'Ceviche',                       tags: ['leger', 'monde'] },
  { emoji: '🥟', nom: 'Empanadas',                     tags: ['monde'] },
  { emoji: '🫘', nom: 'Feijoada',                      tags: ['reconfort', 'monde'] },

  // ---------- Europe du Nord & de l'Est ----------
  { emoji: '🍟', nom: 'Fish & chips',                  tags: ['reconfort', 'monde'] },
  { emoji: '🥧', nom: "Shepherd's pie",                tags: ['reconfort', 'monde'] },
  { emoji: '🍲', nom: 'Goulash',                       tags: ['reconfort', 'monde'] },
  { emoji: '🥟', nom: 'Pierogis',                      tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🍖', nom: 'Boulettes suédoises',           tags: ['reconfort', 'monde'] },
  { emoji: '🌭', nom: 'Currywurst',                    tags: ['rapide', 'monde'] },
  { emoji: '🍳', nom: 'Rösti & œuf au plat',           tags: ['rapide', 'vege', 'monde'] },
  { emoji: '🧀', nom: 'Spätzle au fromage',            tags: ['vege', 'reconfort', 'monde'] },
  { emoji: '🥣', nom: 'Bortsch',                       tags: ['vege', 'monde'] },
  { emoji: '🐟', nom: 'Saumon gravlax',                tags: ['leger', 'monde'] },

  // ---------- Simple, sain ou improvisé ----------
  { emoji: '🥗', nom: 'Salade César',                  tags: ['rapide', 'leger'] },
  { emoji: '🥬', nom: 'Buddha bowl',                   tags: ['vege', 'leger'] },
  { emoji: '🥑', nom: 'Poke bowl',                     tags: ['leger', 'commande'] },
  { emoji: '🌾', nom: 'Salade de quinoa',              tags: ['rapide', 'vege', 'leger'] },
  { emoji: '🍠', nom: 'Patates douces rôties & feta',  tags: ['vege', 'leger'] },
  { emoji: '🐟', nom: 'Saumon & riz',                  tags: ['rapide', 'leger'] },
  { emoji: '🍳', nom: 'Omelette & salade',             tags: ['rapide', 'vege', 'leger'] },
  { emoji: '🥘', nom: 'Poêlée de légumes & œuf',       tags: ['rapide', 'vege', 'leger'] },
  { emoji: '🥦', nom: 'Gratin de légumes',             tags: ['vege', 'reconfort'] },
  { emoji: '🍅', nom: 'Soupe tomate & grilled cheese', tags: ['rapide', 'vege', 'reconfort'] },
  { emoji: '🍝', nom: 'One-pot pasta',                 tags: ['rapide', 'vege', 'reconfort'] },
  { emoji: '🥥', nom: 'Poulet curry-coco',             tags: ['rapide', 'reconfort'] },
  { emoji: '🌯', nom: 'Wraps',                         tags: ['rapide'] },
  { emoji: '🔥', nom: 'Barbecue',                      tags: ['reconfort'] },
  { emoji: '🧇', nom: 'Brunch du soir',                tags: ['vege', 'reconfort'] },
  { emoji: '🧊', nom: 'Les restes du frigo',           tags: ['rapide', 'leger'] },
];
