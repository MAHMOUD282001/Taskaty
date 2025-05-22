import { Navbar } from "./_components/navbar";

interface IProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: IProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
