import { UserButton } from "@clerk/nextjs";

function ProtectedPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default ProtectedPage;
