# 🍽️ On mange quoi ce soir ?

Chacun swipe des plats, l'appli trouve celui qui met tout le foyer d'accord.

- **➡️ Miam** · **⬅️ Bof** · **⬆️ Coup de cœur** (compte double)
- **Sur ce téléphone** : on se passe le téléphone, chacun vote à son tour.
- **Chacun chez soi** : tu votes, tu envoies un lien, les autres votent depuis leur téléphone. Les votes voyagent dans le lien : aucun serveur, aucune base de données.
- Filtres (rapide, végé, léger, réconfort, à commander), plats perso enregistrés sur l'appareil, tirage au sort entre plusieurs matchs.

## Déployer sur GitHub Pages

1. Crée un dépôt sur GitHub (par exemple `on-mange-quoi`), public.
2. Clique sur **Add file → Upload files**, dépose `index.html` (et ce README), puis **Commit changes**.
3. Va dans **Settings → Pages**.
4. Sous **Build and deployment**, choisis **Source : Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
5. Après une minute environ, l'appli est en ligne sur `https://<ton-pseudo>.github.io/on-mange-quoi/`.

En ligne de commande :

```bash
git init && git add . && git commit -m "On mange quoi ce soir ?"
git branch -M main
git remote add origin https://github.com/<ton-pseudo>/on-mange-quoi.git
git push -u origin main
```

Astuce : sur téléphone, « Ajouter à l'écran d'accueil » pour l'ouvrir comme une vraie appli.

## Personnaliser

La liste des plats se trouve en haut du script dans `index.html` (constante `DISHES`) : `['émoji', 'Nom du plat', 'tags']`, avec les tags `rapide`, `vege`, `leger`, `reconfort`, `commande`.
