# CLAUDE.md — Portfolio de Vlad Ciolache

## Qui est Vlad
- Étudiant en **Programmation informatique** au Collège La Cité (Ottawa), diplôme prévu en 2027.
- Études en Technique informatique au Cégep de l'Outaouais, 2021-2024 : **DEC non complété**. Toujours écrire
  « Études en Technique informatique », jamais un diplôme obtenu.
- Emploi actuel : Technicien en gestion des biens TI à Services aux Autochtones Canada (SAC / RCAANC), depuis 2026.
- Avant : Technicien de laboratoire chez Familiprix, Gatineau, 2021-2026.
- Compétences : C#, Python, SQL, JavaScript, HTML/CSS, Bootstrap, jQuery, Qt Designer, SQL Server,
  Windows Server, Linux, pfSense, VMware, adressage IP, DMZ, permissions NTFS, UML.
- Intérêts : cybersécurité, réseau, dépannage. Bilingue français / anglais. Région Gatineau-Ottawa.
- GitHub : `vladciolache` (l'ancien compte est `vladciolache-old`, à ignorer).
- Vlad parle en français québécois : lui répondre en français, clairement et simplement.

## But du projet
Un portfolio pour décrocher un stage ou un premier emploi en TI, en développement ou en cybersécurité.
Le site est la vitrine. La vraie valeur, ce sont les projets qu'on y ajoute au fil des mois.

## Règles importantes
- **Jamais de numéro de téléphone ni de courriel** sur le site : le contact passe par le formulaire Web3Forms.
- **Aucune donnée, capture ou information interne du travail** (gouvernement) dans les projets : données fictives seulement.
- Ne jamais pousser sur GitHub ni publier sans que Vlad le demande.
- Garder le site **sans framework ni étape de build** (HTML/CSS/JS purs), pour que Vlad puisse le modifier lui-même.
- Tout le contenu doit exister **en français et en anglais**.

## Structure du site
| Fichier | Rôle |
|---|---|
| `index.html` | Contenu en français. Chaque texte traduisible a un attribut `data-i18n="cle"`. |
| `script.js` | `CONFIG` (clé Web3Forms, lien LinkedIn), traductions anglaises dans `EN`, thème, menu mobile, formulaire. |
| `style.css` | Couleurs dans les variables `:root` (thèmes `dark` et `light`), puis les sections, puis le mobile (`@media max-width: 820px`). |
| `favicon.svg` | Icône de l'onglet. |

**Ajouter un texte** : mettre le français dans `index.html` avec un `data-i18n`, puis ajouter la même clé dans `EN` (`script.js`).
**Ajouter un projet** : copier un `<article class="card project">` dans la section `#projets`, puis ajouter ses clés `projects.pN.*` dans `EN`.
Badges de statut : `badge-progress` (En cours), `badge-soon` (À venir), `badge-done` (Terminé).

## Hébergement
- GitHub Pages, dans le dépôt public `vladciolache/vladciolache.github.io`, branche `main`, à la racine.
- URL : https://vladciolache.github.io
- Formulaire : Web3Forms (clé dans `CONFIG.web3formsKey`, publique par conception).

## Tester en local
- Dans VS Code : extension Live Server, puis « Open with Live Server » sur `index.html`.
- Sinon : `python3 -m http.server 8000`, puis http://localhost:8000.
- Note pour l'aperçu du navigateur intégré de l'app Claude : son serveur ne peut pas lire `~/Documents`
  (erreur 404). Il faut copier les fichiers dans un dossier temporaire et servir cette copie.

## Feuille de route
1. ✅ Site portfolio bilingue (structure, thème, formulaire)
2. ⏳ Configurer Web3Forms + LinkedIn, puis mettre en ligne sur GitHub Pages
3. ⏳ Corriger le CV : retirer « PROTÉGÉ A / PROTECTED A », ajouter une section Projets et les liens GitHub,
   LinkedIn et portfolio, corriger les accents (COMPÉTENCES, EXPÉRIENCE), « matériel défectueux », et la mention du DEC
4. 🔜 **Projet vedette : système de gestion d'actifs TI** (C# / ASP.NET + SQL Server) : inventaire,
   demandes d'arrivée, de départ et de remplacement, suivi des billets, historique. Dans son propre dépôt.
5. 🔜 **Homelab de sécurité réseau** documenté (pfSense, DMZ, Active Directory, VMs, surveillance), avec schémas.
6. 🔜 Outil de sécurité en Python (analyseur de logs ou scanner pour son propre réseau)
7. 🔜 README de profil GitHub (`vladciolache/vladciolache`)

Chaque projet terminé : mettre à jour sa carte dans `#projets` (badge, lien GitHub) en FR et en EN.
