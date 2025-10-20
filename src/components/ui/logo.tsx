import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  isName?: boolean;
}
export default function Logo({ isName = true }: LogoProps) {
  return (
    <div>
      <Link href="/" className="flex items-center gap-2">
        <Image
          width={60}
          height={32}
          src="/logo-icon.svg"
          alt="Logo da aplicação Business Alchemy"
        />
        {isName && (
          <h2 className="text-xl font-semibold tracking-wide">
            Bussines Alchemy
          </h2>
        )}
      </Link>
    </div>
  );
}
