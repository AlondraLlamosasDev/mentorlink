"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TOTAL_STEPS = 5;

const stepTitles = [
  "Sobre ti",
  "Experiencia profesional",
  "Trayectoria",
  "Acreditación y tarifa",
  "Confirmación",
];

const languageOptions = [
  "Español",
  "Inglés",
  "Portugués",
  "Francés",
  "Alemán",
  "Italiano",
];

const specialtyOptions = [
  "Frontend",
  "Backend",
  "Mobile",
  "DevOps / Cloud",
  "Data Science / ML",
  "UX / UI Design",
  "Product Management",
  "Marketing Digital",
  "Liderazgo",
  "Carrera profesional",
];

type FormData = {
  fullName: string;
  location: string;
  photo: string;
  languages: string[];
  headline: string;
  bio: string;
  specialties: string[];
  yearsExperience: string;
  university: string;
  degree: string;
  graduationYear: string;
  currentRole: string;
  currentCompany: string;
  pastExperience: string;
  linkedin: string;
  portfolio: string;
  videoUrl: string;
  proposedRate: string;
  weeklyHours: string;
  agreeCode: boolean;
};

const initialData: FormData = {
  fullName: "",
  location: "",
  photo: "",
  languages: [],
  headline: "",
  bio: "",
  specialties: [],
  yearsExperience: "",
  university: "",
  degree: "",
  graduationYear: "",
  currentRole: "",
  currentCompany: "",
  pastExperience: "",
  linkedin: "",
  portfolio: "",
  videoUrl: "",
  proposedRate: "",
  weeklyHours: "",
  agreeCode: false,
};

export default function AplicarMentorPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const toggleArray = (field: "languages" | "specialties", value: string) =>
    setData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl bg-info p-10 text-center text-info-foreground">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card text-primary">
            <Check className="h-7 w-7" />
          </div>
          <h1 className="font-heading text-3xl font-semibold">
            ¡Aplicación enviada!
          </h1>
          <p className="mt-3">
            Recibimos tu solicitud y la estamos revisando. Te contactaremos en un
            plazo de 3 a 5 días hábiles al correo registrado.
          </p>
          <Button asChild className="mt-8 h-11 px-6 text-base">
            <a href="/">Volver al inicio</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Aplicar como mentor
        </h1>
        <p className="mt-2 text-muted-foreground">
          Cuéntanos sobre ti. Revisaremos tu aplicación en 3-5 días hábiles.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8 flex items-center justify-between">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
          const n = i + 1;
          const active = n === step;
          const done = n < step;
          return (
            <div key={n} className="flex flex-1 items-center">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium ${
                  done
                    ? "border-primary bg-primary text-primary-foreground"
                    : active
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : n}
              </div>
              {n < TOTAL_STEPS && (
                <div
                  className={`mx-2 h-0.5 flex-1 ${
                    done ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="mb-6 font-heading text-2xl font-semibold">
          {step}. {stepTitles[step - 1]}
        </h2>

        {/* Step 1 — Identidad */}
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="fullName">Nombre completo *</Label>
              <Input
                id="fullName"
                value={data.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                placeholder="Carolina Hernández"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="location">Ubicación *</Label>
              <Input
                id="location"
                value={data.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="Ciudad de México, México"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="photo">Foto profesional *</Label>
              <div className="flex items-center gap-3 rounded-md border border-dashed border-border bg-background px-4 py-6">
                <Upload className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Arrastra una imagen o haz click para subir (JPG, PNG, máx 5MB)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Idiomas que hablas *</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {languageOptions.map((lang) => {
                  const checked = data.languages.includes(lang);
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => toggleArray("languages", lang)}
                      className={`rounded-md border px-3 py-2 text-sm transition ${
                        checked
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
          </div>
        )}

        {/* Step 2 — Profesional */}
        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="headline">Headline *</Label>
              <Input
                id="headline"
                value={data.headline}
                onChange={(e) => update("headline", e.target.value)}
                placeholder="Senior Frontend Developer en Mercado Libre"
              />
              <p className="text-xs text-muted-foreground">
                Una línea que resuma quién eres profesionalmente.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="bio">Bio extendida *</Label>
              <Textarea
                id="bio"
                value={data.bio}
                onChange={(e) => update("bio", e.target.value)}
                placeholder="Cuéntanos tu historia profesional, qué te apasiona enseñar y cómo puedes ayudar a tus mentees…"
                rows={6}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Entre 200 y 500 palabras. {data.bio.split(/\s+/).filter(Boolean).length} palabras.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Especialidades *</Label>
              <div className="grid grid-cols-2 gap-2">
                {specialtyOptions.map((spec) => {
                  const checked = data.specialties.includes(spec);
                  return (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => toggleArray("specialties", spec)}
                      className={`rounded-md border px-3 py-2 text-sm transition ${
                        checked
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

            <div className="flex flex-col gap-2">
              <Label htmlFor="yearsExperience">Años de experiencia *</Label>
              <Select
                value={data.yearsExperience}
                onValueChange={(v) => update("yearsExperience", v)}
              >
                <SelectTrigger id="yearsExperience">
                  <SelectValue placeholder="Selecciona…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-5">3 a 5 años</SelectItem>
                  <SelectItem value="5-10">5 a 10 años</SelectItem>
                  <SelectItem value="10-15">10 a 15 años</SelectItem>
                  <SelectItem value="15+">Más de 15 años</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Mínimo 3 años de experiencia profesional.
              </p>
            </div>
          </div>
        )}

        {/* Step 3 — Trayectoria */}
        {step === 3 && (
          <div className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="university">Universidad *</Label>
                <Input
                  id="university"
                  value={data.university}
                  onChange={(e) => update("university", e.target.value)}
                  placeholder="UNAM"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="graduationYear">Año de graduación *</Label>
                <Input
                  id="graduationYear"
                  type="number"
                  value={data.graduationYear}
                  onChange={(e) => update("graduationYear", e.target.value)}
                  placeholder="2018"
                  min="1970"
                  max="2030"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="degree">Título obtenido *</Label>
              <Input
                id="degree"
                value={data.degree}
                onChange={(e) => update("degree", e.target.value)}
                placeholder="Ingeniería en Sistemas Computacionales"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="currentRole">Rol actual *</Label>
                <Input
                  id="currentRole"
                  value={data.currentRole}
                  onChange={(e) => update("currentRole", e.target.value)}
                  placeholder="Senior Frontend Developer"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="currentCompany">Empresa actual *</Label>
                <Input
                  id="currentCompany"
                  value={data.currentCompany}
                  onChange={(e) => update("currentCompany", e.target.value)}
                  placeholder="Mercado Libre"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="pastExperience">Experiencia previa</Label>
              <Textarea
                id="pastExperience"
                value={data.pastExperience}
                onChange={(e) => update("pastExperience", e.target.value)}
                placeholder="Resume tus 2-3 trabajos anteriores con empresa, rol y duración…"
                rows={5}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Opcional pero recomendado.
              </p>
            </div>
          </div>
        )}

        {/* Step 4 — Acreditación */}
        {step === 4 && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="linkedin">LinkedIn *</Label>
              <Input
                id="linkedin"
                type="url"
                value={data.linkedin}
                onChange={(e) => update("linkedin", e.target.value)}
                placeholder="https://www.linkedin.com/in/tunombre"
              />
              <p className="text-xs text-muted-foreground">
                Validaremos la coherencia con la información declarada.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="portfolio">Portfolio o GitHub</Label>
              <Input
                id="portfolio"
                type="url"
                value={data.portfolio}
                onChange={(e) => update("portfolio", e.target.value)}
                placeholder="https://github.com/tunombre"
              />
              <p className="text-xs text-muted-foreground">
                Opcional pero ayuda a evaluar tu perfil.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="videoUrl">Video de presentación *</Label>
              <Input
                id="videoUrl"
                type="url"
                value={data.videoUrl}
                onChange={(e) => update("videoUrl", e.target.value)}
                placeholder="URL de YouTube, Loom o Vimeo"
              />
              <p className="text-xs text-muted-foreground">
                Video corto (1 a 2 min) presentándote y explicando cómo puedes ayudar.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="proposedRate">Tarifa por sesión (MXN) *</Label>
                <Input
                  id="proposedRate"
                  type="number"
                  value={data.proposedRate}
                  onChange={(e) => update("proposedRate", e.target.value)}
                  placeholder="150"
                  min="50"
                  max="300"
                />
                <p className="text-xs text-muted-foreground">
                  Entre $50 y $300. Sujeto a aprobación.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="weeklyHours">Horas disponibles/semana *</Label>
                <Select
                  value={data.weeklyHours}
                  onValueChange={(v) => update("weeklyHours", v)}
                >
                  <SelectTrigger id="weeklyHours">
                    <SelectValue placeholder="Selecciona…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-3">1 a 3 horas</SelectItem>
                    <SelectItem value="4-6">4 a 6 horas</SelectItem>
                    <SelectItem value="7-10">7 a 10 horas</SelectItem>
                    <SelectItem value="10+">Más de 10 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 5 — Confirmación */}
        {step === 5 && (
          <div className="flex flex-col gap-5">
            <div className="rounded-md bg-info p-4 text-info-foreground">
              <h3 className="mb-2 font-subheading font-semibold">
                Resumen de tu aplicación
              </h3>
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Nombre</dt>
                  <dd className="text-right font-medium">
                    {data.fullName || "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Headline</dt>
                  <dd className="text-right font-medium">
                    {data.headline || "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Especialidades</dt>
                  <dd className="text-right font-medium">
                    {data.specialties.join(", ") || "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Tarifa propuesta</dt>
                  <dd className="text-right font-medium">
                    {data.proposedRate ? `$${data.proposedRate} MXN` : "—"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-md border border-border bg-background p-4 text-sm">
              <p className="font-subheading font-semibold">Código de conducta</p>
              <p className="mt-2 text-muted-foreground">
                Como mentor de MentorLink me comprometo a:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Llegar puntualmente a las sesiones agendadas.</li>
                <li>Tratar a los mentees con respeto y profesionalismo.</li>
                <li>No solicitar pagos ni datos fuera de la plataforma.</li>
                <li>Cumplir con la política de cancelación.</li>
                <li>Reportar cualquier conducta inapropiada al equipo de MentorLink.</li>
              </ul>
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={data.agreeCode}
                onChange={(e) => update("agreeCode", e.target.checked)}
                className="mt-1 h-4 w-4 accent-primary"
              />
              <span className="text-sm">
                Acepto el código de conducta y entiendo que el incumplimiento puede resultar en la suspensión de mi cuenta.
              </span>
            </label>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="h-10 px-4"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Anterior
          </Button>

          {step < TOTAL_STEPS ? (
            <Button
              onClick={() => setStep((s) => Math.min(TOTAL_STEPS, s + 1))}
              className="h-10 px-5"
            >
              Siguiente
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!data.agreeCode}
              className="h-10 px-5"
            >
              Enviar aplicación
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
