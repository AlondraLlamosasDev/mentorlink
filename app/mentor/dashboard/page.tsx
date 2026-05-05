import Link from "next/link";
import {
  Calendar,
  Star,
  TrendingUp,
  DollarSign,
  Users,
  ChevronRight,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MentorAvatar } from "@/components/MentorAvatar";
import { currentMentor, getMentorBySlug } from "@/lib/mock-data";

export const metadata = {
  title: "Panel del mentor — MentorLink",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MentorDashboardPage() {
  const mentor = getMentorBySlug(currentMentor.slug);
  if (!mentor) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        Mentor no encontrado
      </div>
    );
  }

  const firstName = mentor.name.split(" ")[0];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            Hola, {firstName}
          </h1>
          <p className="mt-1 text-muted-foreground">
            Tu panel como mentor. Gestiona tus sesiones y revisa tu desempeño.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href={`/mentores/${mentor.slug}`}>
            <Settings className="mr-1 h-4 w-4" />
            Editar mi perfil
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={DollarSign}
          label="Ganancias del mes"
          value={`$${currentMentor.monthlyEarnings.toLocaleString("es-MX")}`}
          hint={`$${currentMentor.pendingPayout.toLocaleString("es-MX")} para retirar`}
        />
        <StatCard
          icon={Users}
          label="Sesiones del mes"
          value={currentMentor.monthlySessions.toString()}
        />
        <StatCard
          icon={Star}
          label="Tu rating"
          value={`${mentor.rating.toFixed(1)} ★`}
          hint={`${mentor.totalSessions} sesiones totales`}
        />
        <StatCard
          icon={TrendingUp}
          label="Ganancias totales"
          value={`$${currentMentor.totalEarnings.toLocaleString("es-MX")}`}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="space-y-12">
          {/* Próximas sesiones */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold">
                Próximas sesiones
              </h2>
              <Button asChild size="sm" variant="ghost">
                <Link href="#">
                  Ver todas <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {currentMentor.upcomingSessions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <p className="font-subheading text-base">
                  No tienes sesiones agendadas.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Asegúrate de tener tu disponibilidad actualizada para que los
                  mentees puedan reservarte.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {currentMentor.upcomingSessions.map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col gap-4 rounded-2xl bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <MentorAvatar name={s.menteeName} size="md" />
                      <div className="min-w-0">
                        <p className="font-subheading font-semibold">
                          {s.menteeName}
                        </p>
                        <p className="truncate text-sm text-muted-foreground">
                          {s.topic}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {formatDate(s.date)} · {formatTime(s.date)} ·{" "}
                          {s.duration} min
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Cancelar
                      </Button>
                      <Button size="sm">Detalles</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Reviews recientes */}
          <section>
            <h2 className="mb-5 font-heading text-2xl font-semibold">
              Reseñas recientes
            </h2>
            <div className="space-y-3">
              {currentMentor.recentReviews.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-testimonial p-5 text-testimonial-foreground"
                >
                  <div className="mb-2 flex items-center justify-between">
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

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Profile preview */}
          <div className="rounded-2xl bg-card p-6 text-center">
            <MentorAvatar name={mentor.name} size="lg" />
            <p className="mt-3 font-heading text-xl font-semibold">
              {mentor.name}
            </p>
            <p className="text-xs text-muted-foreground">{mentor.headline}</p>
            <Button asChild variant="outline" className="mt-4 w-full" size="sm">
              <Link href={`/mentores/${mentor.slug}`}>Ver perfil público</Link>
            </Button>
          </div>

          {/* Tarifa */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-subheading text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Tu tarifa
            </p>
            <p className="mt-2 font-heading text-3xl font-semibold">
              ${mentor.rate}
              <span className="text-base text-muted-foreground"> MXN</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Por sesión de 60 minutos
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Comisión MentorLink: 20%
            </p>
            <p className="font-medium">
              Recibes: <strong>${Math.round(mentor.rate * 0.8)} MXN</strong> por sesión
            </p>
          </div>

          {/* Disponibilidad */}
          <div className="rounded-2xl bg-info p-6 text-info-foreground">
            <Calendar className="h-6 w-6 text-primary" />
            <p className="mt-3 font-subheading text-sm font-semibold">
              Disponibilidad
            </p>
            <p className="mt-1 text-xs">
              Mantén tu calendario actualizado para que los mentees puedan
              reservarte.
            </p>
            <Button className="mt-4 w-full" size="sm">
              Editar horarios
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-info text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <p className="font-heading text-xl font-semibold">{value}</p>
          {hint && (
            <p className="mt-0.5 text-xs text-muted-foreground">{hint}</p>
          )}
        </div>
      </div>
    </div>
  );
}
