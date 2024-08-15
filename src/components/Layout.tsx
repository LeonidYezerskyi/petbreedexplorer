import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full flex-auto flex-col items-center justify-center">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
