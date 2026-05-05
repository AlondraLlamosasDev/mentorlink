import Link from "next/link";
import { GraduationCap, Briefcase } from "lucide-react";

export const metadata = {
  title: "¿Cómo quieres usar MentorLink? — MentorLink",
};

const options = [
  {
    href: "/dashboard",
    icon: GraduationCap,
    title: "Soy mentee",
    desc: "Quiero encontrar un mentor que me ayude a crecer profesionalmente.",
    cta: "Continuar como mentee",
  },
  {
    href: "/aplicar-mentor",
    icon: Briefcase,
    title: "Soy mentor",
    desc: "Quiero compartir mi experiencia y dar mentorías a otras personas.",
    cta: "Aplicar como mentor",
  },
];

export default function OnboardingRolPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          ¿Cómo quieres usar MentorLink?
        </h1>
        <p className="mt-3 text-muted-foreground">
          Puedes cambiar de rol más adelante desde tu perfil.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {options.map(({ href, icon: Icon, title, desc, cta }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col items-start gap-4 rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-info text-primary">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
            <span className="mt-auto text-sm font-medium text-primary group-hover:underline">
              {cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
