export const metadata = {
  title: "Términos y condiciones — MentorLink",
};

export default function TerminosPage() {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-2 font-heading text-5xl font-semibold tracking-tight">
        Términos y condiciones
      </h1>
      <p className="mb-10 text-sm text-muted-foreground">
        Última actualización: por definir.
      </p>

      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">1. Aceptación</h2>
          <p>
            Al usar MentorLink aceptas estos términos. Si no estás de acuerdo, te pedimos no usar la plataforma.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">2. Cuenta y registro</h2>
          <p>
            Para reservar sesiones necesitas una cuenta con datos verídicos. Eres responsable del uso de tu cuenta y de la confidencialidad de tu acceso.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">3. Suscripciones y pagos</h2>
          <p>
            Las suscripciones se renuevan mensualmente hasta que las canceles. Puedes cancelar en cualquier momento desde tu panel de usuario; tu acceso continuará hasta el fin del periodo pagado.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">4. Conducta esperada</h2>
          <p>
            Tanto mentores como mentees deben mantener una conducta respetuosa. Conductas abusivas o discriminatorias resultan en suspensión inmediata.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-heading text-2xl font-semibold">5. Cambios a los términos</h2>
          <p>
            Podemos actualizar estos términos. Te avisaremos por correo cuando haya cambios importantes.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Este es un documento placeholder. Los términos definitivos serán redactados por un asesor legal antes del lanzamiento.
        </p>
      </div>
    </article>
  );
}
