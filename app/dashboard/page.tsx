import Link from "next/link";
import { Calendar, Star, Wallet, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MentorAvatar } from "@/components/MentorAvatar";
import { currentMentee, getMentorBySlug } from "@/lib/mock-data";

export const metadata = {
  title: "Mi panel — MentorLink",
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

export default function DashboardPage() {
  const me = currentMentee;
  const firstName = me.name.split(" ")[0];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          Hola, {firstName}
        </h1>
        <p className="mt-1 text-muted-foreground">
          Aquí está tu panel. Continúa donde lo dejaste.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Calendar}
          label={
            me.plan === "subscription"
              ? "Sesiones del mes"
              : "Sesiones disponibles"
          }
          value={
            me.plan === "subscription"
              ? `${me.sessionsRemaining}/${me.sessionsTotal}`
              : `${Math.floor(me.walletBalance / 100)}`
          }
        />
        <StatCard
          icon={Wallet}
          label={me.plan === "subscription" ? "Plan actual" : "Saldo"}
          value={
            me.plan === "subscription"
              ? "Suscripción"
              : `$${me.walletBalance} MXN`
          }
        />
        <StatCard
          icon={Clock}
          label="Sesiones totales"
          value={me.totalSessions.toString()}
        />
        <StatCard
          icon={Star}
          label="Tu rating"
          value={`${me.rating.toFixed(1)} ★`}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        {/* Main column */}
        <div className="space-y-12">
          {/* Próximas sesiones */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-semibold">
                Próximas sesiones
              </h2>
              <Button asChild size="sm" variant="ghost">
                <Link href="/mentores">
                  Agendar otra <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {me.upcomingSessions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
                <p className="font-subheading text-base">
                  No tienes sesiones agendadas.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/mentores">Buscar mentor</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {me.upcomingSessions.map((s) => {
                  const mentor = getMentorBySlug(s.mentorSlug);
                  return (
                    <div
                      key={s.id}
                      className="flex flex-col gap-4 rounded-2xl bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        {mentor && <MentorAvatar name={mentor.name} size="md" />}
                        <div className="min-w-0">
                          <p className="font-subheading font-semibold">
                            {mentor?.name ?? "Mentor"}
                          </p>
                          <p className="truncate text-sm text-muted-foreground">
                            {s.topic}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {formatDate(s.date)} · {formatTime(s.date)} · {s.duration} min
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Reagendar
                        </Button>
                        <Button size="sm">Ver detalles</Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* Historial */}
          <section>
            <h2 className="mb-5 font-heading text-2xl font-semibold">
              Historial
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/30 text-left font-subheading text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Mentor</th>
                    <th className="hidden px-4 py-3 sm:table-cell">Tema</th>
                    <th className="px-4 py-3">Fecha</th>
                    <th className="px-4 py-3 text-right">Tu rating</th>
                  </tr>
                </thead>
                <tbody>
                  {me.pastSessions.map((s) => {
                    const mentor = getMentorBySlug(s.mentorSlug);
                    return (
                      <tr
                        key={s.id}
                        className="border-b border-border last:border-0"
                      >
                        <td className="px-4 py-3">
                          <Link
                            href={`/mentores/${s.mentorSlug}`}
                            className="font-medium hover:text-primary"
                          >
                            {mentor?.name ?? "—"}
                          </Link>
                        </td>
                        <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                          {s.topic}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(s.date).toLocaleDateString("es-MX", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3 text-right">
                          {s.menteeRating ? (
                            <span className="inline-flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                              {s.menteeRating}
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              Sin calificar
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Plan card */}
          <div className="rounded-2xl bg-info p-6 text-info-foreground">
            <p className="font-subheading text-xs font-semibold uppercase tracking-wide">
              Tu plan
            </p>
            <p className="mt-1 font-heading text-2xl font-semibold">
              {me.plan === "subscription" ? "Suscripción" : "Plan Libre"}
            </p>
            {me.plan === "subscription" ? (
              <>
                <p className="mt-3 text-sm">
                  Te quedan <strong>{me.sessionsRemaining}</strong> de{" "}
                  {me.sessionsTotal} sesiones este mes.
                </p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-card">
                  <div
                    className="h-full bg-primary"
                    style={{
                      width: `${(me.sessionsRemaining / me.sessionsTotal) * 100}%`,
                    }}
                  />
                </div>
                <p className="mt-2 text-xs">
                  Renovación el 1 de junio · $900 MXN
                </p>
              </>
            ) : (
              <p className="mt-3 text-sm">
                Tu saldo es de <strong>${me.walletBalance} MXN</strong>.
              </p>
            )}
            <Button variant="outline" className="mt-5 w-full bg-card">
              Gestionar plan
            </Button>
          </div>

          {/* Cancelaciones */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-subheading text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Cancelaciones del mes
            </p>
            <p className="mt-2 font-heading text-3xl font-semibold">
              {me.cancellationsThisMonth}
              <span className="text-base text-muted-foreground"> / 3</span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Cancelando con más de 1 hora de anticipación.
            </p>
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
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-info text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {label}
          </p>
          <p className="font-heading text-xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}
