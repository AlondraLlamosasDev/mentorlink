import { Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contacto — MentorLink",
};

const channels = [
  {
    icon: Mail,
    title: "Correo",
    detail: "hola@mentorlink.app",
    desc: "Te respondemos en menos de 24 horas hábiles.",
  },
  {
    icon: MessageCircle,
    title: "Chat",
    detail: "Próximamente",
    desc: "Estamos integrando un chat en vivo para resolver tus dudas al instante.",
  },
  {
    icon: MapPin,
    title: "Oficina",
    detail: "Ciudad de México",
    desc: "Trabajamos de forma remota; visitas con cita previa.",
  },
];

export default function ContactoPage() {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-4 font-heading text-5xl font-semibold tracking-tight">
        Contacto
      </h1>
      <p className="mb-10 text-lg text-muted-foreground">
        ¿Tienes una pregunta, idea o quieres ser mentor? Escríbenos.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map(({ icon: Icon, title, detail, desc }) => (
          <div
            key={title}
            className="rounded-2xl bg-info p-6 text-info-foreground"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary shadow-sm">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mb-1 font-heading text-2xl font-semibold">{title}</h2>
            <p className="font-subheading font-medium">{detail}</p>
            <p className="mt-2 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Información placeholder — los datos reales se actualizarán antes del lanzamiento.
      </p>
    </article>
  );
}
