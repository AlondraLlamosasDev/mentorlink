"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Star, MapPin, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MentorAvatar } from "@/components/MentorAvatar";
import { mentors, SPECIALTIES, LANGUAGES } from "@/lib/mock-data";

type PriceRange = "all" | "low" | "mid" | "high";
type RatingFilter = "all" | "4.0" | "4.5" | "4.8";

const priceLabel: Record<PriceRange, string> = {
  all: "Cualquier precio",
  low: "Hasta $150",
  mid: "$150 a $250",
  high: "Más de $250",
};

const ratingLabel: Record<RatingFilter, string> = {
  all: "Cualquiera",
  "4.0": "4.0★ o más",
  "4.5": "4.5★ o más",
  "4.8": "4.8★ o más",
};

export default function MentoresPage() {
  const [activeSpecialties, setActiveSpecialties] = useState<string[]>([]);
  const [activeLanguages, setActiveLanguages] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceRange>("all");
  const [rating, setRating] = useState<RatingFilter>("all");
  const [showFilters, setShowFilters] = useState(false);

  const toggleArr = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
  ) =>
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );

  const filtered = useMemo(() => {
    return mentors
      .filter((m) => {
        if (
          activeSpecialties.length &&
          !m.specialties.some((s) => activeSpecialties.includes(s))
        ) {
          return false;
        }
        if (
          activeLanguages.length &&
          !m.languages.some((l) => activeLanguages.includes(l))
        ) {
          return false;
        }
        if (price === "low" && m.rate > 150) return false;
        if (price === "mid" && (m.rate < 150 || m.rate > 250)) return false;
        if (price === "high" && m.rate <= 250) return false;
        if (rating !== "all" && m.rating < parseFloat(rating)) return false;
        return true;
      })
      .sort((a, b) => b.rating - a.rating);
  }, [activeSpecialties, activeLanguages, price, rating]);

  const hasActiveFilters =
    activeSpecialties.length > 0 ||
    activeLanguages.length > 0 ||
    price !== "all" ||
    rating !== "all";

  const clearFilters = () => {
    setActiveSpecialties([]);
    setActiveLanguages([]);
    setPrice("all");
    setRating("all");
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Encuentra tu mentor
        </h1>
        <p className="mt-2 text-muted-foreground">
          {mentors.length} mentores aprobados, listos para ayudarte a crecer.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Filters sidebar */}
        <aside
          className={`${showFilters ? "block" : "hidden"} space-y-6 lg:block`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold">Filtros</h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <X className="h-3 w-3" />
                Limpiar
              </button>
            )}
          </div>

          {/* Specialties */}
          <div>
            <h3 className="mb-3 font-subheading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Especialidad
            </h3>
            <div className="flex flex-wrap gap-2">
              {SPECIALTIES.map((spec) => {
                const active = activeSpecialties.includes(spec);
                return (
                  <button
                    key={spec}
                    onClick={() => toggleArr(setActiveSpecialties, spec)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition ${
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="mb-3 font-subheading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Idioma
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => {
                const active = activeLanguages.includes(lang);
                return (
                  <button
                    key={lang}
                    onClick={() => toggleArr(setActiveLanguages, lang)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition ${
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price */}
          <div>
            <h3 className="mb-3 font-subheading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Precio por sesión
            </h3>
            <div className="flex flex-col gap-1.5">
              {(Object.keys(priceLabel) as PriceRange[]).map((p) => (
                <label key={p} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="price"
                    checked={price === p}
                    onChange={() => setPrice(p)}
                    className="h-4 w-4 accent-primary"
                  />
                  {priceLabel[p]}
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="mb-3 font-subheading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Calificación mínima
            </h3>
            <div className="flex flex-col gap-1.5">
              {(Object.keys(ratingLabel) as RatingFilter[]).map((r) => (
                <label key={r} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="rating"
                    checked={rating === r}
                    onChange={() => setRating(r)}
                    className="h-4 w-4 accent-primary"
                  />
                  {ratingLabel[r]}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setShowFilters((s) => !s)}
            >
              <Filter className="mr-1 h-4 w-4" />
              {showFilters ? "Ocultar filtros" : "Filtros"}
            </Button>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="font-subheading text-lg font-medium">
                No encontramos mentores con esos filtros
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Intenta ajustar la búsqueda o limpiar los filtros.
              </p>
              <Button onClick={clearFilters} className="mt-6">
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {filtered.map((m) => (
                <Link
                  key={m.id}
                  href={`/mentores/${m.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <MentorAvatar name={m.name} size="md" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-xl font-semibold leading-tight group-hover:text-primary">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {m.headline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      <strong className="text-foreground">{m.rating.toFixed(1)}</strong>
                      <span>({m.totalSessions})</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {m.location.split(",")[0]}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-info px-2.5 py-0.5 text-xs text-info-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="font-heading text-2xl font-semibold">
                        ${m.rate}
                      </p>
                      <p className="text-xs text-muted-foreground">por sesión</p>
                    </div>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      Ver perfil →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
