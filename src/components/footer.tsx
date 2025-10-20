import Image from "next/image";
import Link from "next/link";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer className="border-white/20 bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-center gap-2 py-4 md:flex-row md:justify-between">
          <Logo />
          <nav className="flex flex-col items-center gap-4 text-blue-100 md:flex-row">
            <Link href="/terms-of-use" className="hover:text-blue-200">
              Termos de uso
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-200">
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
