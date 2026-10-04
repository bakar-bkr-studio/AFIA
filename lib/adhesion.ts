/* Réglages de la session d'adhésion (utilisés par la page Adhésion et le menu).
   Chaque année : passer ADHESIONS_OUVERTES à true à l'ouverture (janvier),
   mettre à jour ANNEE, PROCHAINE_SESSION et le lien HelloAsso,
   puis repasser à false à la fermeture. */
export const ADHESIONS_OUVERTES = false;
export const ANNEE = 2026;
export const PROCHAINE_SESSION = "janvier 2027";
export const HELLOASSO_WIDGET =
  "https://www.helloasso.com/associations/association-familles-d-ici-et-d-ailleurs-afia/adhesions/adhesion-2026/widget";

// Libellé du bouton orange du menu
export const LIBELLE_BOUTON_ADHESION = ADHESIONS_OUVERTES ? "Adhérer · 22 €" : "Adhésion";
