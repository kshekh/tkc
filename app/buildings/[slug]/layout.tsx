import HeaderPage from "@/components/ui/HeaderPage";
import Footer from "@/components/ui/Footer";
export default function BuildingsPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <HeaderPage />

      {children}

      <Footer />
    </section>
  );
}
