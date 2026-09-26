# 🍽️ On mange quoi ce soir ?

Chacun swipe des plats, l'appli trouve celui qui met tout le foyer d'accord.

- **➡️ Miam** · **⬅️ Bof** · **⬆️ Coup de cœur** (compte double)
- **Sur ce téléphone** : on se passe le téléphone, chacun vote à son tour.
- **Chacun chez soi** : tu votes, tu envoies un lien, les autres votent depuis leur téléphone. Les votes voyagent dans le lien : aucun serveur, aucune base de données.
- 159 plats, cuisine française et du monde, avec des filtres (rapide, végé, léger, réconfort, à commander, cuisine française, du monde).
- Plats perso enregistrés sur l'appareil, tirage au sort entre plusieurs matchs.

Astuce : sur téléphone, « Ajouter à l'écran d'accueil » pour l'ouvrir comme une vraie appli.

## Personnaliser la liste des plats

Tout se passe dans `dishes.js`, une ligne par plat :

```js
{ emoji: '🍝', nom: 'Lasagnes', tags: ['reconfort', 'monde'] },
```

Tags possibles : `rapide`, `vege`, `leger`, `reconfort`, `commande`, `france`, `monde`. Ce sont eux qui font marcher les filtres.
Les filtres « Cuisine française » et « Du monde » s'additionnent, les autres se cumulent (« Végé » + « Rapide » = plats à la fois végé et rapides).

Après modification, renvoie `dishes.js` sur GitHub : le site se met à jour tout seul en une minute.
