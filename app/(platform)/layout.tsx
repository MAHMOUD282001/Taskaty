import { ClerkProvider } from "@clerk/nextjs";

interface IProps {
  children: React.ReactNode;
}

function PlatformLayout({ children }: IProps) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default PlatformLayout;
