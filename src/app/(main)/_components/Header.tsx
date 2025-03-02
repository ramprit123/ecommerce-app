import { LogoImage } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export const Header = () => {
  return (
    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <LogoImage className="mr-4" />
      <form
        className="flex-1 max-w-lg"
        action={async (formData) => {
          "use server";
          const query = formData.get("query");
          redirect(`/search?query=${query}`);
        }}
      >
        <Input type="text" name="query" placeholder="Search for products" />
      </form>
      <div className="flex gap-8">
        <nav className="flex gap-4">
          <a href="#" className="text-md text-text">
            My Order
          </a>
          <a href="#" className="text-md text-text">
            My Basket
          </a>
        </nav>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="secondary">Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};
