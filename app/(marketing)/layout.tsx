import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

interface IProps {
  children: React.ReactNode;
}

function MarketingLayout({ children }: IProps) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
