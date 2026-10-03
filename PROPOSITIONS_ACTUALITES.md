# Propositions d'actualités : première lecture du 3 octobre 2026

Statut : **propositions uniquement. `data/actualites.json` n'a pas été modifié.**
Sources lues : `MEMOIRE_AFIA.md`, `SUIVI_QUARTIER_ETE_2026.md`, `TACHES_A_FAIRE_AFIA.md`, `RESPONSABLE_*` (projets, communication), `PROGRAMMES_ANNUELS_2026-2027.md`, `TEXTE_POST_AVENTURELAND.md`, mémoire du projet AFIA.
Pour chaque ligne, répondez : OK, Non, ou Modifier (avec votre correction).

## A. À retirer ou corriger (le site affiche aujourd'hui des informations inexactes ou périmées)

| # | Actualité actuelle | Problème | Proposition |
|---|---|---|---|
| A1 | « Plage de Dieppe, 29 juillet » | La sortie a été **annulée** (suivi Quartier d'été). Elle est pourtant affichée comme une sortie. | Passer `publie` à `false`. Pas d'explication en ligne (le motif est interne). |
| A2 | « Tournoi de foot intergénérationnel en août » | Je n'ai trouvé **aucune trace** de ce tournoi dans les fichiers de pilotage que j'ai lus. Il est en plus daté d'août, donc passé. | Masquer, sauf si vous me confirmez qu'il a eu lieu ou qu'il est reprogrammé. |
| A3 | « Aventure Land : sortie parc le 16 juillet, inscriptions ouvertes, 60 places » | La sortie est réalisée. « Inscriptions ouvertes » est faux aujourd'hui. | Remplacer par l'actualité de bilan (B1). |

## B. Actualités à créer ou mettre à jour (informations présentes dans vos dossiers)

| # | Proposition | Contenu proposé | Source | Point à confirmer |
|---|---|---|---|---|
| B1 | **Aventure Land : retour sur la sortie** (statut : terminé) | « Le 16 juillet, AFIA a emmené environ 54 participants au parc Aventure Land de Magny-en-Vexin dans le cadre de Quartier d'été : accrobranche, jeux, toboggans et moments conviviaux. Merci aux familles, aux bénévoles, à Viabus et à la Ville de Meaux. » | `TEXTE_POST_AVENTURELAND.md`, `SUIVI_QUARTIER_ETE_2026.md` | Faut-il garder la mention de Viabus en ligne ? Quelle photo (sans visage d'enfant identifiable) ? |
| B2 | **Aide aux devoirs, AFIA Réussite : inscriptions ouvertes pour 2026-2027** (statut : en cours) | « Le soutien scolaire reprend les mardis et vendredis de 16h30 à 18h00, en période scolaire, pour les élèves du primaire et du collège. Inscriptions ouvertes début octobre. » | mémoire du projet (reconduction 2026-2027), dossier `06_MODELES_DOCUMENTS` | Où les familles s'inscrivent-elles (au local, par téléphone, formulaire du site) ? Je ne l'invente pas. |
| B3 | **Journée des Familles d'Ici et d'Ailleurs, Espace Bessières** (statut : terminé, à confirmer) | Bilan de la journée festive du 21 août (14h à 18h) | `03_PROJETS_EVENEMENTS/2026_Journee_Festive_Bessieres/` (un `Bilan_Bessieres.pptx` existe) | La journée a-t-elle bien eu lieu à cette date ? Nombre de participants à afficher ? Je n'ai pas lu le contenu du bilan. |
| B4 | **Forum Insertion Jeune, Square de la Brie** (statut : terminé, à confirmer) | Bilan du forum du 16 septembre (13h30 à 17h), avec les structures présentes (Mission Locale, EPIDE, CIO, E2C77, ADSEA 77, Maison des Parents). | mémoire du projet, `2026_Forum_Insertion_Jeune/` | Le forum a-t-il eu lieu comme prévu ? Quels chiffres de fréquentation ? Autorisation de citer les partenaires par leur nom ? |
| B5 | **Fort-Mahon (10 août) et Nigloland (18 août)** | Aujourd'hui seul Nigloland figure sur le site (« 18 août », Dolancourt). Fort-Mahon est absent. | `SUIVI_QUARTIER_ETE_2026.md`, `MEMOIRE_AFIA.md` (états « Validée », sans bilan) | Ces deux sorties ont-elles eu lieu ? Si oui, je prépare un bilan court pour chacune (nombre de participants, photos). |

## C. À ne pas publier pour l'instant (dans vos dossiers, mais pas prêt)

- **Programmes annuels 2026-2027** (Café des familles, Jeunes en action, Studio AFIA, etc.) : proposition de travail, **non validée par le Bureau** d'après le document lui-même.
- **Sortie de Noël à Paris**, **Speed Park**, **ateliers enfants d'octobre**, **barbecue avec les jeunes** : dates et organisation encore à confirmer.
- **Conférences sur les rixes** : dates à prévoir.
- **Subvention de la Ville (montant)**, budgets, listes de participants : jamais en ligne.

## D. Onglet « Ville de Meaux »

Les 4 actualités actuelles (Quartier d'été municipal, permanences CCAS, saison du Colisée, dispositif préfecture) sont des contenus de départ dont **je ne connais pas la source**. Je propose de les laisser telles quelles pour l'instant et de les remplacer plus tard par de vraies informations issues des mails de l'association (phase 2).

## E. Images

Les photos actuelles viennent d'Unsplash (images de substitution, sans lien avec AFIA). Pour les remplacer, il faudra de vraies photos validées dans `public/images/actualites/`. Si vous le souhaitez, je peux lister les photos d'`Aventureland/Photos_a_importer` et du dossier Visuels, mais je ne les choisirai qu'avec votre accord à cause du droit à l'image.

## Questions à trancher en priorité

1. A1 à A3 : j'applique ces trois retraits ?
2. B3, B4, B5 : quels événements ont réellement eu lieu, et avec quels chiffres ?
3. B2 : comment les familles s'inscrivent-elles ?

## Décisions du 3 octobre 2026 (appliquées dans `data/actualites.json`)

- A1, A2, A3 : retraits faits (Dieppe, tournoi de foot, ancien texte Aventure Land). Les entrées sont masquées, pas supprimées.
- Ajout de six actualités : aide aux devoirs (mardis et vendredis, 16h30 à 18h00, 10 places, primaire et collège, gratuit, inscriptions au local à venir), Forum Insertion Jeune, Journée des Familles d'Ici et d'Ailleurs (250 à 300 personnes), Nigloland (63 participants), Fort-Mahon (60 participants), Aventure Land (environ 54 participants).
- Toutes les images sont des **images provisoires** (Unsplash) en attendant de vraies photos.

### Points restant à confirmer
1. Nom exact du magasin Leclerc sponsor (le nom a été dicté, je n'ai pas voulu l'écrire de mémoire).
2. Formulation pour la sous-préfète : titre exact à afficher, ou ne pas la mentionner.
3. Forum : nom des huit structures en ligne ? (non cité pour l'instant)
4. Aventure Land : mention de Viabus (retirée de la version du site).
5. Date des séances d'inscription à l'aide aux devoirs, et affiche.

## Mises à jour du 3 octobre 2026 (suite)

- Leclerc : « E.Leclerc de Mareuil-lès-Meaux », appliqué.
- Sous-préfète : mentionnée sans nom, conservé tel quel.
- Aventure Land : Viabus reste absent (simple fournisseur de transport).
- Fort-Mahon : « en car » confirmé.
- Forum : structures citées par leur nom (Mission Locale Nord-Est, EPIDE, CIO, École de la 2e Chance, ADSEA 77, Maison des Parents, structures jeunesse). Le nombre « huit » n'est plus écrit en ligne, car je ne peux identifier avec certitude que sept noms dans vos documents. **À confirmer : quelle est la 8e structure présente** (Collectif Meldois, ou autre ?).

- Forum : 8e structure confirmée par Bakar = Collectif Meldois, ajouté au texte avec « huit structures ».
