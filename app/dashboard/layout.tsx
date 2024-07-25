import { ClerkLoaded } from "@clerk/nextjs";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div>{children}</div>
    </ClerkLoaded>
  );
}
export default DashboardLayout;
