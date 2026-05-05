import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";

const navLinks = [
  { href: "/mentores", label: "Mentores" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#precios", label: "Precios" },
  { href: "/#testimonios", label: "Testimonios" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="MentorLink"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="font-heading text-xl font-semibold tracking-tight">
            MentorLink
          </span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" className="h-9 px-4">
            <Link href="/sign-in">Iniciar sesión</Link>
          </Button>
          <Button asChild className="h-9 px-4">
            <Link href="/sign-up">Registrarse</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
