import { SignedIn, UserButton } from "@clerk/nextjs";
import { FilePlus2 } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-5">
      <Logo />
      <SignedIn>
        <div className="flex items-center space-x-2">
          <Button asChild variant="link" className="hidden md:flex">
            <Link href="/dashboard/upgrade">Dashboard</Link>
          </Button>
          {/* need to fix this later for Upgrade Button */}
          <Button asChild variant="outline">
            <Link href="/dashboard">Documents</Link>
          </Button>

          <Button asChild variant="link">
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-blue-600" />
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default Header;
