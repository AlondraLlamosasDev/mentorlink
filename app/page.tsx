import Link from "next/link";
import { Calendar, Star, Users, Video, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/HeroCarousel";

const steps = [
  {
    icon: Users,
    title: "1. Escoge tu mentor",
    desc: "Filtra por especialidad, idioma y rating. Lee reviews reales de quienes ya tomaron sesiones.",
  },
  {
    icon: Calendar,
    title: "2. Agenda tu sesión",
    desc: "Reserva en su calendario en tiempo real. Recibes confirmación instantánea por correo.",
  },
  {
    icon: Video,
    title: "3. Conéctate y crece",
    desc: "Video llamada integrada en la plataforma. Sin Zoom, sin enredos, sin instalar nada.",
  },
];

const plans = [
  {
    name: "Plan Libre",
    price: "$100",
    priceUnit: "/sesión",
    desc: "Paga solo por las sesiones que tomes.",
    features: [
      "Sesiones de 60 minutos",
      "Saldo recargable acumulable",
      "Acceso al catálogo completo",
      "2 cancelaciones gratis al mes",
      "Sin compromiso ni renovación",
    ],
    cta: "Empezar a recargar",
    highlight: false,
  },
  {
    name: "Suscripción",
    price: "$900",
    priceUnit: "/mes",
    desc: "Para quienes toman mentorías de forma constante.",
    features: [
      "10 sesiones de 60 minutos al mes",
      "Acceso al catálogo completo",
      "3 cancelaciones gratis al mes",
      "Si agotas tus sesiones, puedes comprar libres",
      "Cancela cuando quieras",
    ],
    cta: "Suscribirme",
    highlight: true,
  },
];

const testimonials = [
  {
    name: "Andrea L.",
    role: "Diseñadora UX",
    quote:
      "En tres meses pasé de junior a mid. Mi mentor me guió en todo el proceso de portafolio.",
  },
  {
    name: "Diego M.",
    role: "Developer Frontend",
    quote:
      "Conseguí mi primer trabajo en tech gracias a las sesiones de preparación de entrevistas.",
  },
  {
    name: "Lucía R.",
    role: "Product Manager",
    quote:
      "Tener un mentor con experiencia real cambió por completo mi forma de tomar decisiones.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-card px-4 py-16 sm:px-6 sm:py-20">
        <div className="container mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-heading text-5xl font-semibold tracking-tight sm:text-7xl">
              MentorLink
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl">
              Encuentra tu mentor 1-a-1 ideal, agenda tu primera sesión y avanza más rápido en tu carrera.
            </p>
          </div>

          <HeroCarousel />

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 px-8 text-base">
              <Link href="/sign-up">Empezar ahora</Link>
            </Button>
            <Button asChild variant="secondary" className="h-12 px-8 text-base">
              <Link href="/aplicar-mentor">Soy mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="px-4 py-20 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              ¿Cómo funciona?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tres pasos para empezar a aprender de los mejores.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl bg-info p-8 text-center text-info-foreground"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-heading text-2xl font-semibold">{title}</h3>
                <p className="text-base">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="px-4 py-20 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Dos formas de aprender
            </h2>
            <p className="mt-3 text-muted-foreground">
              Escoge el plan que se ajuste a tu ritmo. Sin contratos largos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${
                  plan.highlight
                    ? "border-4 border-primary"
                    : "border border-border"
                }`}
              >
                <h3 className="font-heading text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-semibold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.priceUnit}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.highlight ? "default" : "secondary"}
                  className="mt-8 h-11 w-full text-base"
                >
                  <Link href="/sign-up">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="px-4 py-20 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              Lo que dicen nuestros mentees
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl bg-testimonial p-6 text-testimonial-foreground"
              >
                <div className="mb-4 flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base">{t.quote}</p>
                <div className="mt-6">
                  <p className="font-subheading font-semibold">{t.name}</p>
                  <p className="text-sm opacity-70">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
