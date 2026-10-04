import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Politique de confidentialité du site de l'association AFIA.",
};

const email = "famillesdicietdailleurs@gmail.com";

export default function ConfidentialitePage() {
  return (
    <LegalPage eyebrow="Vos données" title="Politique de confidentialité" updated="4 octobre 2026">
      <LegalSection title="En bref">
        <p>
          Nous collectons uniquement les informations nécessaires pour vous
          répondre et gérer les adhésions. Elles ne sont jamais vendues ni
          utilisées à des fins publicitaires.
        </p>
      </LegalSection>

      <LegalSection title="Responsable du traitement">
        <p>
          Association Familles d’Ici et d’Ailleurs (AFIA), Appartement 25, 4 Square
          de la Brie, 77100 Meaux, représentée par son président, Aboubakar
          MAHAMADOU. Contact : <a href={`mailto:${email}`}>{email}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Quelles données et pourquoi ?">
        <ul>
          <li>
            <strong>Formulaire de contact</strong> : nom, adresse e-mail,
            téléphone (facultatif), sujet et message. Ces informations servent
            uniquement à répondre à votre demande.
          </li>
          <li>
            <strong>E-mails</strong> (inscription à l’aide aux devoirs,
            bénévolat…) : les informations que vous choisissez de nous envoyer,
            pour traiter votre demande.
          </li>
          <li>
            <strong>Adhésion</strong> : les justificatifs apportés à la
            permanence (pièces d’identité, livret de famille, justificatif de
            domicile) servent uniquement à valider l’adhésion du foyer. Une
            copie est conservée par l’association dans le dossier
            d’adhésion.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Qui y a accès ?">
        <p>
          Seuls les membres du Bureau de l’association. Pour faire fonctionner
          le site, nous faisons appel à des prestataires techniques qui
          n’utilisent pas vos données pour leur propre compte :
        </p>
        <ul>
          <li>Vercel, pour l’hébergement du site ;</li>
          <li>Resend, pour l’acheminement des messages du formulaire de contact jusqu’à notre boîte e-mail.</li>
        </ul>
        <p>
          Le paiement en ligne des adhésions est géré par HelloAsso, selon sa
          propre politique de confidentialité.
        </p>
      </LegalSection>

      <LegalSection title="Combien de temps ?">
        <ul>
          <li>Messages et demandes : le temps de traiter votre demande, puis au maximum 3 ans après notre dernier échange.</li>
          <li>Données d’adhésion, y compris la copie des justificatifs : pendant la durée de l’adhésion, puis au maximum 3 ans.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Le site n’utilise pas de cookies de mesure d’audience ni de cookies
          publicitaires. Certains contenus intégrés, comme la carte Google Maps
          (page Contact) et le formulaire HelloAsso (page Adhésion), peuvent
          déposer leurs propres cookies lorsque vous les consultez.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez à tout moment demander à consulter, corriger ou supprimer
          vos données, ou vous opposer à leur utilisation, en écrivant à{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          adresser une réclamation à la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>).
        </p>
      </LegalSection>
    </LegalPage>
  );
}
