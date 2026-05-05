export const metadata = {
  title: "Aviso de privacidad — MentorLink",
};

export default function PrivacidadPage() {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-2 font-heading text-5xl font-semibold tracking-tight">
        Aviso de privacidad
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        Última actualización: por definir.
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">Qué datos recopilamos</h2>
          <p>
            Tu nombre, correo, foto de perfil (opcional) y la información necesaria para procesar pagos. Al agendar sesiones también almacenamos los detalles de cada cita y las reseñas que dejes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">Para qué los usamos</h2>
          <p>
            Para hacer funcionar la plataforma, conectar mentees con mentores, procesar tu suscripción, mejorar la experiencia y enviarte comunicaciones operativas (confirmaciones, recordatorios).
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">Con quién los compartimos</h2>
          <p>
            Solo con los proveedores estrictamente necesarios para operar el servicio (procesador de pagos, envío de correos, video llamadas). Nunca vendemos tus datos a terceros.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">Tus derechos</h2>
          <p>
            Puedes acceder, corregir o eliminar tu información en cualquier momento desde tu perfil. También puedes solicitarnos la baja completa escribiendo a nuestro correo de contacto.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Este es un documento placeholder. El aviso definitivo cumplirá con la LFPDPPP (México) y será redactado por un asesor antes del lanzamiento.
        </p>
      </div>
    </article>
  );
}
