# 🍽️ On mange quoi ce soir ?

Entrée, plat ou dessert : chacun swipe, l'appli trouve ce qui met tout le foyer d'accord.

- **➡️ Miam** · **⬅️ Bof** · **⬆️ Coup de cœur** (compte double)
- **Sur ce téléphone** : on se passe le téléphone, chacun vote à son tour.
- **Chacun chez soi** : tu votes, tu envoies un lien, les autres votent depuis leur téléphone. Les votes voyagent dans le lien : aucun serveur, aucune base de données.
- **Au menu** : entrée, plat, dessert, ou plusieurs à la fois. Avec les trois, c'est un menu complet : les cartes sont réparties entre les catégories et l'appli trouve un gagnant pour chacune.
- 80 entrées, 159 plats et 98 desserts, cuisine française et du monde, avec des filtres (rapide, végé, léger, réconfort, à commander, cuisine française, du monde).
- Recettes perso (entrée, plat ou dessert) enregistrées sur l'appareil, tirage au sort entre plusieurs matchs.

## Personnaliser la liste

Tout se passe dans `dishes.js`, une ligne par idée :

```js
{ emoji: '🥚', nom: 'Œufs mimosa', type: 'entree', tags: ['rapide', 'vege', 'france'] },
{ emoji: '🍝', nom: 'Lasagnes', tags: ['reconfort', 'monde'] },
{ emoji: '🍮', nom: 'Crème brûlée', type: 'dessert', tags: ['vege', 'france'] },
```

`type` vaut `entree`, `plat` ou `dessert`. Sans `type`, c'est un plat.

Tags possibles : `rapide`, `vege`, `leger`, `reconfort`, `commande`, `france`, `monde`. Ce sont eux qui font marcher les filtres.
Les filtres « Cuisine française » et « Du monde » s'additionnent, les autres se cumulent (« Végé » + « Rapide » = idées à la fois végé et rapides).

Après modification, renvoie `dishes.js` sur GitHub : le site se met à jour tout seul en une minute.
