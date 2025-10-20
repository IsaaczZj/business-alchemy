import Image from "next/image";
import Link from "next/link";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between py-4">
          
          <Logo/>
          <nav className="text-muted-foreground flex flex-col items-center gap-4 md:flex-row">
            <Link href="/terms-of-use" className="hover:text-primary">
              Termos de uso
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary">
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
