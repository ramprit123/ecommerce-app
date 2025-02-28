import {
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-16 border-b border-border shadow-sm">
      <div className="flex items-center justify-between gap-4 mx-auto max-w-7xl h-full">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/images/logo.svg" alt="Logo" width={140} height={140} />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
