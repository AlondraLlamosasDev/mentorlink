import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  MapPin,
  Globe,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MentorAvatar } from "@/components/MentorAvatar";
import { getMentorBySlug, mentors } from "@/lib/mock-data";

export async function generateStaticParams() {
  return mentors.map((m) => ({ id: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mentor = getMentorBySlug(id);
  if (!mentor) return { title: "Mentor no encontrado" };
  return {
    title: `${mentor.name} — MentorLink`,
    description: mentor.headline,
  };
}

export default async function MentorPerfilPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mentor = getMentorBySlug(id);
  if (!mentor) notFound();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <Link
        href="/mentores"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-primary"
      >
        ← Volver al catálogo
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-card p-6 sm:flex-row sm:p-8">
            <MentorAvatar name={mentor.name} size="xl" />
            <div className="flex-1">
              <h1 className="font-heading text-4xl font-semibold tracking-tight">
                {mentor.name}
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                {mentor.headline}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <strong>{mentor.rating.toFixed(1)}</strong>
                  <span className="text-muted-foreground">
                    ({mentor.totalSessions} sesiones)
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {mentor.location}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {mentor.languages.join(", ")}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {mentor.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-info px-3 py-1 text-xs font-medium text-info-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bio */}
          <section>
            <h2 className="mb-4 font-heading text-2xl font-semibold">
              Sobre {mentor.name.split(" ")[0]}
            </h2>
            <p className="leading-relaxed">{mentor.bio}</p>
          </section>

          {/* Trayectoria */}
          <section>
            <h2 className="mb-6 font-heading text-2xl font-semibold">
              Trayectoria
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-info text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-subheading font-semibold">
                    {mentor.degree}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {mentor.university} · Generación {mentor.graduationYear}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-info text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-subheading font-semibold">
                    {mentor.currentRole} en {mentor.currentCompany}
                  </p>
                  <p className="text-sm text-muted-foreground">Actualmente</p>

                  {mentor.pastExperience.length > 0 && (
                    <ul className="mt-4 space-y-2 border-l-2 border-border pl-4">
                      {mentor.pastExperience.map((p) => (
                        <li key={`${p.company}-${p.years}`} className="text-sm">
                          <span className="font-medium">{p.role}</span> en {p.company}
                          <span className="text-muted-foreground"> · {p.years}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Ver perfil de LinkedIn
              </a>
            </div>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="mb-6 font-heading text-2xl font-semibold">
              Lo que dicen sus mentees ({mentor.reviews.length})
            </h2>
            <div className="space-y-4">
              {mentor.reviews.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-testimonial p-6 text-testimonial-foreground"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-subheading font-semibold">
                      {r.menteeName}
                    </p>
                    <p className="text-xs opacity-70">
                      {new Date(r.date).toLocaleDateString("es-MX", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="mb-2 flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < r.rating ? "fill-current" : "fill-none opacity-30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm">{r.comment}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky aside */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Tarifa por sesión</p>
              <p className="mt-1 font-heading text-4xl font-semibold">
                ${mentor.rate}
                <span className="text-base font-normal text-muted-foreground">
                  {" "}MXN
                </span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                60 minutos · video llamada
              </p>
            </div>

            <Button className="mt-6 h-12 w-full text-base">
              <Calendar className="mr-2 h-4 w-4" />
              Agendar sesión
            </Button>

            <Button
              asChild
              variant="outline"
              className="mt-3 h-11 w-full text-base"
            >
              <Link href="/sign-up">Crear cuenta para reservar</Link>
            </Button>

            <ul className="mt-6 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                Cancela hasta 1 hora antes sin costo
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                Video llamada integrada en MentorLink
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                Recibe recordatorio por correo
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
