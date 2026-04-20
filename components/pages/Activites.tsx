"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import {
  BookOpenText,
  CalendarBlank,
  ChalkboardTeacher,
  ClockAfternoon,
  Confetti,
  EnvelopeSimple,
  GraduationCap,
  HandHeart,
  MapPin,
  Palette,
  ShieldCheck,
  SoccerBall,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";

const homeworkHighlights = [
  {
    icon: GraduationCap,
    title: "Du CP à la 3ème",
  },
  {
    icon: CalendarBlank,
    title: "Tous les mardis et vendredis",
  },
  {
    icon: ClockAfternoon,
    title: "16h30 - 18h",
  },
  {
    icon: ChalkboardTeacher,
    title: "Professeure des écoles + bénévoles",
  },
];

const dailyActivities = [
  {
    icon: Confetti,
    badge: "Animation de quartier",
    title: "Créer du lien entre voisins",
    desc: "Des moments conviviaux pour rassembler les habitants et renforcer les liens dans le quartier.",
    items: ["Fête des voisins", "Halloween", "Chasse aux œufs", "Événements festifs"],
  },
  {
    icon: Sparkle,
    badge: "Activités ludiques",
    title: "Des moments de jeu pour les plus jeunes",
    desc: "Des activités adaptées pour divertir les enfants dans un cadre sécurisé.",
    items: ["Châteaux gonflables", "Jeux collectifs", "Mini bowling", "Parcours ludiques"],
  },
  {
    icon: Palette,
    badge: "Activités manuelles",
    title: "Stimuler la créativité des enfants",
    desc: "Des ateliers pour développer l’imagination et la créativité.",
    items: ["Peinture", "Collage", "Création", "Ateliers créatifs"],
  },
  {
    icon: SoccerBall,
    badge: "Activités sportives",
    title: "Bouger, se dépasser, partager",
    desc: "Des activités physiques accessibles à tous, adaptées aux différents publics.",
    items: ["Football", "Jeux collectifs", "Parcours sportifs", "Activités selon l’âge"],
  },
];

const organization = [
  {
    icon: UsersThree,
    title: "Encadrement par bénévoles",
    desc: "Chaque activité est animée par une équipe associative présente et à l’écoute des enfants et des familles.",
  },
  {
    icon: BookOpenText,
    title: "Adaptation selon l’âge",
    desc: "Les activités sont organisées par tranche d’âge pour garantir un accompagnement pertinent et sécurisé.",
  },
  {
    icon: ShieldCheck,
    title: "Ouvertes à tous",
    desc: "Les activités sont accessibles aux habitants du quartier, avec des modalités adaptées selon les actions.",
  },
];

const schedule = [
  {
    day: "Mardi",
    title: "Aide aux devoirs",
    time: "16h30 - 18h",
    note: "Accompagnement scolaire encadré",
  },
  {
    day: "Vendredi",
    title: "Aide aux devoirs",
    time: "16h30 - 18h",
    note: "Séance régulière primaire-collège",
  },
  {
    day: "Prochain rendez-vous",
    title: "Animation de quartier",
    time: "Date annoncée chaque mois",
    note: "Fête locale ou activité thématique",
  },
];

export function Activites() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <Badge variant="primary" className="mb-6">
              Ce que nous faisons toute l’année
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter text-text-primary max-w-2xl leading-[1.05]">
              Des activités pour apprendre, partager et s’épanouir
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-[58ch]">
              {"De l’aide aux devoirs aux animations de quartier, AFIA agit chaque semaine auprès des familles et des enfants de Meaux."}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface-muted">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1400&q=80"
                alt="Animation éducative avec des enfants en groupe"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-primary-900/5 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Bloc prioritaire */}
      <Section className="bg-surface-elevated">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-muted">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80"
                alt="Accompagnement scolaire avec une enseignante"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <Badge variant="primary" className="mb-5">
              Activité phare
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary leading-[1.1] max-w-2xl">
              Un accompagnement scolaire régulier pour les enfants
            </h2>
            <p className="mt-5 text-base text-text-secondary leading-relaxed max-w-[60ch]">
              {"Nous accompagnons les enfants dans leur réussite scolaire en leur offrant un cadre structuré, bienveillant et régulier."}
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {homeworkHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border-subtle bg-surface p-4 flex items-start gap-3"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <item.icon size={18} weight="duotone" className="text-primary" />
                  </div>
                  <p className="text-sm text-text-primary leading-relaxed">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/adhesion">
                <Button>S’inscrire</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Se renseigner</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Activités du quotidien */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Activités du quotidien
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Des formats adaptés à chaque public
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {dailyActivities.map((activity) => (
            <StaggerItem key={activity.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <activity.icon size={20} weight="duotone" className="text-primary" />
                  </div>
                  <Badge variant="outline">{activity.badge}</Badge>
                </div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-5">
                  {activity.desc}
                </p>
                <ul className="space-y-2">
                  {activity.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Organisation */}
      <Section className="bg-surface-elevated">
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Fonctionnement
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Des activités encadrées et accessibles
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {organization.map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
                <div className="h-11 w-11 rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <item.icon size={22} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.15} className="mt-6">
          <div className="rounded-2xl border border-border-subtle bg-surface p-6 md:p-7">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                <MapPin size={20} weight="duotone" className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">
                  Un cadre local, proche des familles
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mt-1">
                  Les activités sont organisées à Meaux, au plus près du quartier de
                  Beauval, pour rester accessibles aux familles et aux enfants.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Calendrier */}
      <Section>
        <FadeIn className="max-w-3xl mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Calendrier
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
            Nos prochains rendez-vous
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {schedule.map((event) => (
            <StaggerItem key={`${event.day}-${event.title}`}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface-elevated p-7">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                  {event.day}
                </p>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text-primary">
                  {event.title}
                </h3>
                <p className="text-sm text-primary mt-2">{event.time}</p>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {event.note}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <FadeIn>
          <div className="rounded-3xl bg-primary-950 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-primary-800/25 blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs uppercase tracking-widest text-primary-200 font-semibold">
                Passer à l’action
              </p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tighter text-white max-w-3xl leading-[1.1]">
                Envie de participer à nos activités ?
              </h2>
              <p className="mt-4 text-primary-100 max-w-[58ch] leading-relaxed">
                {"Inscrivez un enfant, rejoignez l’équipe bénévole ou contactez-nous pour connaître le prochain programme."}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/adhesion">
                  <Button
                    size="lg"
                    className="bg-white text-primary-950 hover:bg-zinc-100 border-none"
                  >
                    Inscrire un enfant
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent"
                  >
                    <HandHeart size={18} weight="duotone" />
                    Devenir bénévole
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                    <EnvelopeSimple size={18} weight="duotone" />
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
