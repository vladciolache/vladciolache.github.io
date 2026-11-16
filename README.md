# Portfolio — Vlad Ciolache

Site portfolio bilingue (FR/EN) fait en HTML, CSS et JavaScript, sans framework.
En ligne sur **https://vladciolache.github.io**.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Tout le contenu du site, en français |
| `style.css` | Le design (couleurs en haut du fichier) |
| `script.js` | Traductions anglaises, thème, menu mobile, formulaire |
| `favicon.svg` | L'icône de l'onglet |

## Modifier le contenu

- **Texte en français** : directement dans `index.html`.
- **Texte en anglais** : dans l'objet `EN` de `script.js`, avec la même clé que le `data-i18n` du HTML.
- **Ajouter un projet** : copie un bloc `<article class="card project">` dans `index.html`
  et ajoute ses traductions dans `EN`.

## Voir le site en local

Dans VS Code, installe l'extension **Live Server**, fais un clic droit sur `index.html`,
puis choisis **Open with Live Server**. Sinon, dans un terminal :

```bash
python3 -m http.server 8000
```

Ensuite, ouvre http://localhost:8000.

## Configurer le formulaire de contact

Les messages passent par [Web3Forms](https://web3forms.com) (gratuit) : ton courriel n'est jamais visible sur le site.

1. Va sur https://web3forms.com, entre ton courriel et reçois ta clé (« Access Key »).
2. Colle-la dans `script.js` : `web3formsKey: "ta-clé-ici"`.

## Mettre en ligne (GitHub Pages)

1. Sur GitHub, crée un dépôt **public** nommé exactement `vladciolache.github.io`, sans README.
2. Dans le dossier du projet :

```bash
git add .
git commit -m "Premier portfolio"
git branch -M main
git remote add origin https://github.com/vladciolache/vladciolache.github.io.git
git push -u origin main
```

3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → `main` / root**.
4. Après 1 à 2 minutes, le site est en ligne sur https://vladciolache.github.io.

Pour chaque mise à jour par la suite : `git add .`, `git commit -m "..."`, puis `git push`.
