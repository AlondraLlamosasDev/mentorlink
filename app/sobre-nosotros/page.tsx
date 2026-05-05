export const metadata = {
  title: "Sobre nosotros — MentorLink",
};

export default function SobreNosotrosPage() {
  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-4 font-heading text-5xl font-semibold tracking-tight">
        Sobre nosotros
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Construimos puentes entre quienes saben y quienes quieren aprender.
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <p>
          MentorLink nace de una idea simple: el mejor aprendizaje sucede entre personas. Conectamos a profesionales con experiencia real con quienes están empezando o quieren acelerar su camino, una sesión a la vez.
        </p>
        <p>
          Creemos que el conocimiento es más valioso cuando se comparte con propósito. Por eso construimos una plataforma transparente, sin contratos largos ni intermediarios complicados, donde cada conversación cuenta.
        </p>

        <h2 className="mt-12 mb-3 font-heading text-3xl font-semibold">
          Nuestra misión
        </h2>
        <p>
          Hacer que la mentoría de calidad sea accesible. Queremos que cualquier persona, sin importar dónde viva, pueda encontrar un mentor que le ayude a crecer profesional y personalmente.
        </p>

        <h2 className="mt-12 mb-3 font-heading text-3xl font-semibold">
          Cómo lo hacemos
        </h2>
        <p>
          Curamos cada perfil de mentor manualmente. Cada uno trae años de experiencia comprobable en su área. Tú escoges con quién hablar, cuándo y cuántas veces — nosotros nos encargamos de que la experiencia sea fluida.
        </p>
      </div>
    </article>
  );
}
