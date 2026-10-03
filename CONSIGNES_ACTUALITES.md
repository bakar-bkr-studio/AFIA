# Consignes de mise à jour des actualités du site AFIA

Ce fichier est la notice que Claude relit à chaque mise à jour des actualités.
Il décrit d'où vient l'information, ce qui peut être publié, et comment procéder.

## 1. Principe

- Les actualités du site sont stockées dans `data/actualites.json`. C'est le seul fichier à modifier pour changer les actualités affichées (page Actualités et section de l'accueil).
- Le site lit ce fichier via `lib/actualites.ts`. Seules les actualités avec `"publie": true` s'affichent.
- Règle de validation : **rien n'est modifié dans `data/actualites.json` sans l'accord explicite de Bakar.** Claude écrit d'abord ses propositions dans `PROPOSITIONS_ACTUALITES.md`, Bakar tranche, puis Claude applique.
- La publication en ligne (envoi sur GitHub, mise en ligne sur Vercel) reste un geste de Bakar.

## 2. Sources à lire (dossier opérationnel AFIA)

Dossier : `AFIA` (sur l'ordinateur de Bakar), en priorité :

- `05_MEMOIRE_PILOTAGE/MEMOIRE_AFIA.md` : mémoire centrale (projets réalisés, en cours, à confirmer).
- `11_TABLEAUX_DE_BORD/Projets/` : suivis de projets (ex. `Quartier_Ete_2026/SUIVI_QUARTIER_ETE_2026.md`).
- `11_TABLEAUX_DE_BORD/Taches_Echeances/TACHES_A_FAIRE_AFIA.md` : état des tâches.
- `03_PROJETS_EVENEMENTS/` : dossiers projets, bilans, calendrier des manifestations.
- `07_COMMUNICATION_STRATEGIE/Textes_Posts_Messages/` : textes déjà rédigés pour les réseaux sociaux (bonne base pour les actualités).
- `09_REUNIONS_DECISIONS/` : décisions prises.

En cas de doute sur une date, un état (à venir, réalisé, annulé) ou un chiffre, Claude le signale à Bakar au lieu de deviner.

## 3. Ce qui peut être publié

Oui, sous forme d'actualité :
- Une sortie, un événement ou un programme **validé et annoncé publiquement** (ou déjà réalisé).
- Le bilan d'une action réalisée, avec des chiffres globaux (nombre de participants arrondi).
- Les remerciements aux partenaires et financeurs qui ont déjà été remerciés publiquement.
- Les dates et horaires d'inscription d'un programme ouvert au public.

## 4. Ce qui ne doit jamais être publié

- Noms, prénoms, photos ou détails permettant d'identifier des enfants, des mineurs ou des familles.
- Listes de participants, d'adhérents, coordonnées personnelles.
- Montants de subventions, budgets, finances, factures, devis, relevés bancaires.
- Sujets RH et recrutement interne, décisions du Bureau non annoncées.
- Projets au stade de brainstorming ou non validés par le Bureau (par exemple les programmes annuels tant qu'ils ne sont pas validés).
- Raisons internes d'une annulation (par exemple budgétaires) : on retire simplement l'actualité, sans l'expliquer en ligne.
- Tout document marqué interne, confidentiel ou à valider.

## 5. Format d'une actualité

Chaque entrée de `data/actualites.json` contient :

| Champ | Contenu |
|---|---|
| `id` | identifiant court, sans accent, unique (ex. `aventure-land-bilan`) |
| `category` | Sortie, Événement, Programme, À venir, Ville, Dispositif, Culture, Jeunesse |
| `title` | titre court et concret |
| `date` | date lisible (ex. `16 juillet 2026`) |
| `excerpt` | 2 à 4 phrases, concrètes (chiffres globaux, remerciements) |
| `image` | chemin vers une vraie photo validée dans `public/images/actualites/`, jamais une photo d'enfants identifiables |
| `statut` | `a_venir`, `en_cours`, `termine`, `permanent` ou `a_verifier` |
| `publie` | `true` pour afficher, `false` pour masquer sans supprimer |
| `source` | fichier de l'espace AFIA d'où vient l'information |

Les actualités sont rangées de la plus récente ou la plus importante à la moins importante. L'accueil affiche les 4 premières de chaque onglet.

## 6. Ton et style

- Français simple, chaleureux, concret, tourné vers les familles. Ton familial, social et institutionnel.
- Slogan de l'association : « Créer du lien, partager, construire ensemble ».
- Pas de tirets longs (« — ») dans les textes : utiliser virgules, deux-points ou phrases séparées.
- Ne jamais inventer un détail précis (lieu, horaire, chiffre, étage). Si l'information manque, la demander.
- Respecter la charte graphique AFIA pour tout visuel.

## 7. Cycle de mise à jour (chaque vendredi soir)

1. Claude relit les sources du point 2 et `data/actualites.json`.
2. Pour chaque projet, Claude vérifie : nouveau, changé d'état (à venir, en cours, terminé), annulé, ou périmé.
3. Claude écrit `PROPOSITIONS_ACTUALITES.md` : nouvelles actualités à ajouter, actualités à passer en « terminé », à retirer, et questions pour Bakar. **Le site n'est pas modifié à ce stade.**
4. Pendant le week-end, Bakar valide, corrige ou refuse.
5. Claude applique les décisions dans `data/actualites.json`, puis Bakar teste en local et publie.

## 8. Actualités de la Ville de Meaux (phase 2, plus tard)

Les infos de l'onglet « Ville de Meaux » viendront des mails reçus par l'association. Règles prévues : uniquement des informations publiques et municipales, jamais de données personnelles, la source (expéditeur, date du mail) toujours notée dans `source`, et même validation par Bakar avant publication.
