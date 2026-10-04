import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de l'Association Familles d'Ici et d'Ailleurs (AFIA).",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales" updated="4 octobre 2026">
      <LegalSection title="Éditeur du site">
        <p>
          <strong>Association Familles d’Ici et d’Ailleurs (AFIA)</strong>
          <br />
          Association loi 1901, déclarée à la sous-préfecture de Meaux.
        </p>
        <ul>
          <li>Siège social : Appartement 25, 4 Square de la Brie, 77100 Meaux</li>
          <li>N° RNA : W771002607</li>
          <li>N° SIREN : 531 632 347</li>
          <li>
            Téléphone : <a href="tel:+33981109027">09.81.10.90.27</a>
          </li>
          <li>
            E-mail : <a href="mailto:famillesdicietdailleurs@gmail.com">famillesdicietdailleurs@gmail.com</a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>Aboubakar MAHAMADOU, président de l’association.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          <strong>Vercel Inc.</strong>
          <br />
          440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
          <br />
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Les textes, photographies, logos et visuels présents sur ce site sont la
          propriété de l’association AFIA, sauf mention contraire. Toute
          reproduction, même partielle, nécessite l’accord préalable de
          l’association.
        </p>
        <p>
          Les logos des partenaires restent la propriété de leurs détenteurs
          respectifs.
        </p>
      </LegalSection>

      <LegalSection title="Droit à l’image">
        <p>
          Les photos publiées illustrent les activités de l’association. Si
          vous apparaissez sur une photo et souhaitez qu’elle soit retirée,
          écrivez-nous à{" "}
          <a href="mailto:famillesdicietdailleurs@gmail.com">famillesdicietdailleurs@gmail.com</a> :
          nous la retirerons dans les meilleurs délais.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Pour savoir comment nous utilisons les informations que vous nous
          transmettez, consultez notre{" "}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Liens externes">
        <p>
          Le site contient des liens vers d’autres sites (réseaux sociaux,
          HelloAsso, Google Maps…). L’association n’est pas responsable de leur
          contenu.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
