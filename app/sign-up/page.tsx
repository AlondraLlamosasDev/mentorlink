import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Crear cuenta — MentorLink",
};

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex max-w-md items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            Crea tu cuenta
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Empieza a aprender de los mejores en minutos.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Carolina Hernández"
              autoComplete="name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="Mínimo 8 caracteres"
              autoComplete="new-password"
              minLength={8}
              required
            />
            <p className="text-xs text-muted-foreground">
              Al menos 8 caracteres. Mezcla letras y números.
            </p>
          </div>

          <Button type="submit" className="mt-2 h-11 text-base">
            Crear cuenta
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          <span>o</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button variant="outline" className="h-11 w-full text-base">
          Continuar con Google
        </Button>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Al crear tu cuenta aceptas nuestros{" "}
          <Link href="/terminos" className="underline hover:text-foreground">
            términos
          </Link>{" "}
          y{" "}
          <Link href="/privacidad" className="underline hover:text-foreground">
            aviso de privacidad
          </Link>
          .
        </p>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          ¿Ya tienes cuenta?{" "}
          <Link href="/sign-in" className="font-medium text-primary hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
