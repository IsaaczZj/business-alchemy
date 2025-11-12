import Link from "next/link";
import { Button } from "./ui/button";
import ActiveLink from "./active-link";
import Logo from "./ui/logo";

export default function Header() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50 w-full border-b border-white/20 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Inicio</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button
              variant="secondary"
              className="rounded-full bg-blue-200 text-white hover:bg-blue-300"
              asChild
            >
              <Link href="/start">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
